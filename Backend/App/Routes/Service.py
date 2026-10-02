from App.models import Scan_history, Plant, Plant_care, User
from App.Utils.Response import (
    error_response,
    success_response,
    plant_identification_response,
    fetch_wikipedia_details,
    fetch_perenual_details,
    create_care_guide,
)
from App.Routes.PlantCare import get_plant_care
from flask import request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity
from dotenv import load_dotenv
from werkzeug.utils import secure_filename
from datetime import timedelta
from App import db
import requests
import os

load_dotenv()

service_route = Blueprint("plant", __name__)
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "webp"}


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@service_route.route("/identify", methods=["POST"])
@jwt_required()
def identify():
    """
    Plant Identification Endpoint
    ---
    tags:
      - Plant Identification
    consumes:
      - multipart/form-data
    security:
      - Bearer: []
    parameters:
      - in: formData
        name: image
        type: file
        required: true
        description: Plant image to identify
    responses:
      200:
        description: Plant identified successfully
      400:
        description: Invalid image
      500:
        description: Internal server error
    """
    try:
        if "image" not in request.files:
            return error_response(
                message="No image file provided in the request.", status_code=400
            )

        file = request.files["image"]

        if file.filename == "":
            return error_response(message="No selected file.", status_code=400)

        if not allowed_file(file.filename):
            return error_response(message="Invalid file format.", status_code=400)

        api_key = os.getenv("PLANTNET_API_KEY")
        url = "https://my-api.plantnet.org/v2/identify/all"
        params = {"api-key": api_key}
        files = {"images": (file.filename, file.stream, file.mimetype)}
        data = {"organs": "auto"}
        response = requests.post(url, params=params, files=files, data=data, timeout=30)

        if response.status_code != 200:
            return error_response(
                message=f"PlantNet API error: {response.text}",
                status_code=response.status_code,
            )

        raw_api_data = response.json()
        formatted_response, status_code = plant_identification_response(raw_api_data)
        best_match = formatted_response["data"]["best_match"]
        if not best_match:
            return error_response(
                message="No plant could be identified.", status_code=404
            )

        current_user_id = int(get_jwt_identity())
        scientific_name = best_match["scientific_name"]
        common_name = best_match["primary_common_name"]
        family = best_match["family"]
        confidence = best_match["confidence_score"]

        wiki_info = fetch_wikipedia_details(scientific_name, common_name)
        perenual_info = fetch_perenual_details(scientific_name=scientific_name)

        details = os.getenv("PERENUAL_API_KEY")
        details_url = f"GET https://perenual.com/api/v2/species-list?key={details}"
        plant = Plant.query.filter_by(scientific_name=scientific_name).first()
        if not plant:
            plant = Plant(
                scientific_name=scientific_name,
                common_name=common_name,
                family=family,
                description=wiki_info.get("description"),
                image_url=wiki_info.get("image_url")
                or perenual_info.get("default_image", {}).get("regular_url"),
                pet_toxicity_level=(
                    "Toxic" if perenual_info.get("poisonous_to_pets") else "Non-toxic"
                ),
                human_toxicity_level=(
                    "Toxic" if perenual_info.get("poisonous_to_humans") else "Non-toxic"
                ),
                perenual_species_id=perenual_info.get("id"),
            )
            db.session.add(plant)
            db.session.flush()

        scan = Scan_history(
            user_id=current_user_id,
            plant_id=plant.id,
            image_path=file.filename,
            confidence_score=confidence,
            identified_name=scientific_name,
            identification_status="success",
        )
        db.session.add(scan)
        db.session.commit()

        return formatted_response

    except requests.exceptions.Timeout:
        db.session.rollback()
        return error_response(
            message="Plant identification service timed out.", status_code=504
        )
    except requests.exceptions.RequestException as e:
        db.session.rollback()
        return error_response(
            message=f"Plant identification service error: {str(e)}", status_code=502
        )
    except Exception as e:
        db.session.rollback()
        return error_response(message=str(e), status_code=500)


@service_route.route("/history", methods=["GET"])
@jwt_required()
def history():
    """
    Get All History for Logged-in User
    ---
    tags:
      - Plant history
    security:
      - Bearer: []
    responses:
      200:
        description: A list of user history
    """
    try:
        current_user_id = int(get_jwt_identity())
        scans = Scan_history.query.filter_by(user_id=current_user_id).all()

        if not scans:
            return error_response(message="Empty dataset.", status_code=400)

        response_data = []
        for scan in scans:
            response_data.append(
                {
                    "scan_id": scan.id,
                    "identified_name": scan.identified_name,
                    "confidence_score": scan.confidence_score,
                    "image_path": scan.image_path,
                    "scan_timestamp": scan.scan_timestamp,
                    "common_name": scan.plant.common_name if scan.plant else None,
                    "scientific_name": (
                        scan.plant.scientific_name if scan.plant else None
                    ),
                }
            )

        return success_response(message="Your history.", data=response_data)

    except Exception as e:
        return error_response(str(e))


@service_route.route("/show_plants", methods=["GET"])
# @jwt_required()
def show_all_plants():
    """
    Get all plants
    ---
    tags:
        - Plant List
    responses:
        200:
            description: A list of plants
    """
    try:
        data = Plant.query.all()
        results = db.session.execute(
            db.select(
                Plant.id,
                Plant.common_name,
                Plant.scientific_name,
                Scan_history.scan_timestamp
            ).join(Scan_history, Plant.id == Scan_history.plant_id)
        ).all()

        if not data:
            return error_response(message="No data found.", status_code=404)

        plants = []
        for plant in results:
            plants.append(
                {
                    "id": plant.id,
                    "name": plant.common_name,
                    "scientific_name": plant.scientific_name,
                    "scanned_at": plant.scan_timestamp,
                }
            )

        return success_response(message="Plants data", data=plants)

    except Exception as e:
        return error_response(str(e))


@service_route.route("/plant_details/<int:id>", methods=["GET"])
def show_plant_details(id):
    """
    Get inforamtion about plant
    ---
    tags:
        - Plant details
    parameters:
        - in: path
          name: id
          type: integer
          required: true
          description: Plant id for details
    responses:
        200:
            description: Details of the plant
        400:
            description: Invalid inputs
        500:
            description: Internal server error
    """
    try:
        data = Scan_history.query.filter_by(plant_id=id).all()

        if not data:
            return error_response(message="No such plant stored yet.")

        plant = []
        for info in data:
            plant.append(
                {
                    "scan_id": info.id,
                    "identified_name": info.identified_name,
                    "confidence_score": info.confidence_score,
                    "image_path": info.plant.image_url if info.plant else None,
                    "scan_timestamp": info.scan_timestamp,
                    "common_name": info.plant.common_name if info.plant else None,
                    "scientific_name": (
                        info.plant.scientific_name if info.plant else None
                    ),
                }
            )

        return success_response(message="Plant details", data=plant)

    except Exception as e:
        return error_response(str(e))
    

@service_route.route("/plant_care/<int:id>", methods=["GET"])
def show_plant_care(id):
    """
    Get care information about a plant
    ---
    tags:
        - Plant care

    parameters:
        - in: path
          name: id
          type: integer
          required: true
          description: Plant id for care information

    responses:
        200:
            description: Plant care information
        400:
            description: Plant care information not found
        500:
            description: Internal server error
    """

    try:
        care = Plant_care.query.filter_by(plant_id=id).first()

        if not care:
            return error_response(
                message="No care information found for this plant."
            )

        return success_response(
            message="Plant care information",
            data=care.to_dict()
        )

    except Exception as e:
        return error_response(str(e))


@service_route.route("/plant_history/<int:id>", methods=["GET"])
def show_plant_history(id):
    """
    Get history about plant
    ---
    tags:
        - Plant history
    parameters:
        - in: path
          name: id
          type: integer
          required: true
          description: Plant id for history
    responses:
        200:
            description: History of the plant
        400:
            description: Invalid inputs
        500:
            description: Internal server error
    """
    try:
        data = Scan_history.query.filter_by(plant_id=id).all()

        if not data:
            return error_response(message="History not found.", status_code=404)

        plant_history = []
        for info in data:
            plant_history.append(
                {
                    "image_path": info.image_path,
                    "name": info.identified_name,
                    "confidence_score": info.confidence_score,
                    "timestamp": info.scan_timestamp,
                }
            )

        return success_response(message="Plant history", data=plant_history)

    except Exception as e:
        return error_response(str(e))


@service_route.route("/remove_history", methods=["DELETE"])
@jwt_required()
def remove_all_history():
    """
    Removed all history
    ---
    tags:
        - Remove history
    security:
        - Bearer: []
    responses:
        200:
            description: History found successfully
        404:
            description: History not found
    """
    try:
        user_id = int(get_jwt_identity())
        user = User.query.get(user_id)

        if not user:
            return error_response(message="Unauthorized user.")

        plant_ids = (
            db.session.query(Scan_history.plant_id)
            .filter(Scan_history.user_id == user_id, Scan_history.plant_id.isnot(None))
            .distinct()
            .all()
        )

        plant_id_list = [p[0] for p in plant_ids]

        Scan_history.query.filter_by(user_id=user_id, plant_id=None).delete(
            synchronize_session=False
        )

        if plant_id_list:
            plants_to_delete = Plant.query.filter(Plant.id.in_(plant_id_list)).all()
            for plant in plants_to_delete:
                db.session.delete(plant)

        db.session.commit()

        return success_response(message="History deleted.")

    except Exception as e:
        return error_response(str(e))


@service_route.route("/remove_history_byid/<int:plant_id>", methods=["DELETE"])
@jwt_required()
def delete_single_plant_history(plant_id):
    """
    Removed history
    ---
    tags:
        - Remove history
    security:
      - Bearer: []
    parameters:
        - in: path
          name: plant_id
          type: integer
          required: true
          description: Plant id for history
    responses:
        200:
            description: History found successfully
        404:
            description: History not found
    """
    try:
        current_user_id = int(get_jwt_identity())

        user_scan = Scan_history.query.filter_by(
            user_id=current_user_id, plant_id=plant_id
        ).first()

        if not user_scan:
            return error_response(message="User not found.", status_code=404)

        plant = Plant.query.get(plant_id)
        if not plant:
            return error_response(message="Plant not found.", status_code=404)

        db.session.delete(plant)
        db.session.commit()

        return success_response(message="Plant removed from history.")

    except Exception as e:
        return error_response(str(e))


@service_route.route("/care/<int:id>", methods=["GET"])
@jwt_required()
def get_plant_care_details(id):
    """
    Get care inforamtion about plant
    ---
    tags:
        - Plant details
    security:
        - Bearer: []
    parameters:
        - in: path
          name: id
          type: integer
          required: true
          description: Plant id for details
    responses:
        200:
            description: Care details of the plant
        400:
            description: Invalid inputs
        500:
            description: Internal server error
    """
    try:
        current_user_id = int(get_jwt_identity())
        scan = (
            Scan_history.query.filter_by(user_id=current_user_id, plant_id=id)
            .order_by(Scan_history.scan_timestamp.desc())
            .first()
        )

        if not scan:
            return error_response(message="Scan history not found.")

        plant = Plant.query.get(id)

        if not plant:
            return error_response(message="Plant not found.")

        scientific_name = plant.scientific_name
        if not scientific_name:
            return error_response("Plant not identified yet.")
        
        care_exist = Plant_care.query.filter_by(plant_id=plant.id).first()
        if care_exist:
            return success_response(
                message="Care already exist",
                data=care_exist.to_dict(),
            )
                
        response = create_care_guide(scientific_name=scientific_name)
        if not response:
            return error_response(
                message="API error.",
                status_code=400
            )

        raw_data = response[0] if isinstance(response, (list, tuple)) else response
        
        care_payload = raw_data.get("data", raw_data) if isinstance(raw_data, dict) else {}
        if not care_payload:
            return error_response(
                message="Invalid care guide data received.",
                status_code=500
            )
        characteristics = care_payload.get("characteristics") or {}
        flowering = care_payload.get("flowering") or {}
        fruiting = care_payload.get("fruiting") or {}
        growth = care_payload.get("growth") or {}
        hardiness = care_payload.get("hardiness") or {}
        harvesting = care_payload.get("harvesting") or {}
        pruning = care_payload.get("pruning") or {}
        watering = care_payload.get("watering") or {}
        watering_benchmark = watering.get("benchmark") or {}

        # Instantiate model
        new_care = Plant_care(
            plant_id=plant.id,
            # Watering
            watering=watering.get("frequency"),
            watering_benchmark=watering_benchmark.get("value"),
            watering_benchmark_unit=watering_benchmark.get("unit"),
            # Environment & Soil
            sunlight_requirement=care_payload.get("sunlight"),
            soil_type=care_payload.get("soil"),
            hardiness_min=float(hardiness["min"]) if hardiness.get("min") is not None else None,
            hardiness_max=float(hardiness["max"]) if hardiness.get("max") is not None else None,
            # Pruning & Maintenance
            pruning_months=pruning.get("months"),
            pruning_amount=float(pruning["amount"]) if pruning.get("amount") is not None else None,
            pruning_interval=pruning.get("interval"),
            growth_rate=growth.get("rate"),
            maintenance=growth.get("maintenance"),
            care_level=growth.get("care_level"),
            # Propagation & Pests
            propagation=care_payload.get("propagation"),
            attracts=care_payload.get("attracts"),
            pest_susceptibility=care_payload.get("pests"),
            # Seasons
            flowering_season=flowering.get("season"),
            fruiting_season=fruiting.get("season"),
            harvest_season=harvesting.get("season"),
            harvest_method=harvesting.get("method"),
            # Characteristics & Booleans
            flowers=flowering.get("flowers", characteristics.get("flowers")),
            fruits=fruiting.get("fruits"),
            cones=characteristics.get("cones"),
            leaf=characteristics.get("leaf"),
            edible_fruit=fruiting.get("edible", characteristics.get("edible_fruit")),
            edible_leaf=characteristics.get("edible_leaf"),
            medicinal=characteristics.get("medicinal"),
            drought_tolerant=characteristics.get("drought_tolerant"),
            salt_tolerant=characteristics.get("salt_tolerant"),
            thorny=characteristics.get("thorny"),
            invasive=characteristics.get("invasive"),
            rare=characteristics.get("rare"),
            tropical=characteristics.get("tropical"),
            cuisine=characteristics.get("cuisine"),
        )

        db.session.add(new_care)
        db.session.commit()
        
        return success_response(
            message="Take care of your plant:",
            data=new_care.to_dict()
        )
        

    except Exception as e:
        db.session.rollback()
        return error_response(str(e))


@service_route.route("/plant/<int:plant_id>/favorite", methods=["PUT"])
@jwt_required()
def toggle_favorite(plant_id):
    """
    Toggle Favorite Status for a Plant by ID
    ---
    tags:
      - Plant
    security:
      - Bearer: []
    parameters:
      - in: path
        name: plant_id
        type: integer
        required: true
        description: Unique identifier of the plant
    responses:
      200:
        description: Plant favorite status updated successfully
      404:
        description: Plant not found
      500:
        description: Internal server error
    """
    try:
        plant = Plant.query.get(plant_id)

        if not plant:
            return error_response(message="Plant not found.", status_code=404)

        # Toggle the boolean flag
        plant.is_favorite = not plant.is_favorite
        db.session.commit()

        return success_response(
            message=f"Plant {'added to' if plant.is_favorite else 'removed from'} favorites.",
            data=plant.to_dict(),
        )

    except Exception as e:
        db.session.rollback()
        return error_response(str(e))
