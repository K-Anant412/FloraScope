from App.models import Scan_history, Plant, Plant_care, User
from App.Utils.Response import error_response, success_response, plant_identification_response, fetch_wikipedia_details, fetch_perenual_details
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
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'webp'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

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
        if 'image' not in request.files:
            return error_response(
                message="No image file provided in the request.",
                status_code=400
            )

        file = request.files["image"]

        if file.filename == '':
            return error_response(
                message="No selected file.",
                status_code=400
            )

        if not allowed_file(file.filename):
            return error_response(
                message="Invalid file format.",
                status_code=400
            )

        api_key = os.getenv("PLANTNET_API_KEY")
        url = "https://my-api.plantnet.org/v2/identify/all"
        params = { "api-key": api_key }
        files = { "images": ( file.filename, file.stream, file.mimetype ) }
        data = { "organs": "auto" }
        response = requests.post( url, params=params, files=files, data=data, timeout=30 )
        
        if response.status_code != 200:
            return error_response(
                message=f"PlantNet API error: {response.text}",
                status_code=response.status_code
            )

        raw_api_data = response.json()
        formatted_response, status_code = plant_identification_response(raw_api_data)
        best_match = formatted_response["data"]["best_match"]
        # formatted_data = formatted_response[0]["data"]
        if not best_match:
            return error_response(
                message="No plant could be identified.",
                status_code=404
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
        plant = Plant.query.filter_by(
            scientific_name = scientific_name
        ).first()
        if not plant:  
            plant = Plant(
                scientific_name=scientific_name,
                common_name=common_name,
                family=family,
                description=wiki_info.get("description"),
                image_url=wiki_info.get("image_url") or perenual_info.get("default_image", {}).get("regular_url"),
                pet_toxicity_level="Toxic" if perenual_info.get("poisonous_to_pets") else "Non-toxic",
                human_toxicity_level="Toxic" if perenual_info.get("poisonous_to_humans") else "Non-toxic"
            )
            db.session.add(plant)
            db.session.flush()
        
        care = Plant_care.query.filter_by(plant_id=plant.id).first()
        if not care:
            sunlight = perenual_info.get("sunlight", [])
            care = Plant_care(
                plant_id=plant.id,
                sunlight_requirement=", ".join(sunlight) if isinstance(sunlight, list) else str(sunlight),
                soil_type=", ".join(perenual_info.get("soil", [])) if perenual_info.get("soil") else None,
                watering_frequency=7 if perenual_info.get("watering") == "Average" else 14,
                watering_unit="days",
                min_temp=perenual_info.get("hardiness", {}).get("min"),
                max_temp=perenual_info.get("hardiness", {}).get("max")
            )
            db.session.add(care)
        
        scan = Scan_history(
            user_id = current_user_id,
            plant_id=plant.id,
            image_path=file.filename,
            confidence_score=confidence,
            identified_name=scientific_name,
            identification_status="success"
        )
        db.session.add(scan)
        db.session.commit()
        
        return formatted_response

    except requests.exceptions.Timeout:
            db.session.rollback()
            return error_response(message="Plant identification service timed out.", status_code=504)
    except requests.exceptions.RequestException as e:
            db.session.rollback()
            return error_response(message=f"Plant identification service error: {str(e)}", status_code=502)
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
            return error_response(
                message="Empty dataset.",
                status_code=400
            )

        response_data = []
        for scan in scans:
            response_data.append({
                "scan_id": scan.id,
                "identified_name": scan.identified_name,
                "confidence_score": scan.confidence_score,
                "image_path": scan.image_path,
                "scan_timestamp": scan.scan_timestamp,
                "common_name": scan.plant.common_name if scan.plant else None,
                "scientific_name": scan.plant.scientific_name if scan.plant else None,
            })
        
        return success_response(
            message="Your history.",
            data=response_data
        )
        
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
        
        if not data:
            return error_response(
                message="No data found.",
                status_code=404
            )
            
        plants = []
        for plant in data:
            plants.append({
                "id": plant.id,
                "name": plant.common_name,
                "scientific_name":plant.scientific_name,
                "description": plant.description
            })
        
        return success_response(
            message="Plants data",
            data=plants
        )
        
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
            plant.append({
                "scan_id": info.id,
                "identified_name": info.identified_name,
                "confidence_score": info.confidence_score,
                "image_path": info.plant.image_url if info.plant else None,
                "scan_timestamp": info.scan_timestamp,
                "common_name": info.plant.common_name if info.plant else None,
                "scientific_name": info.plant.scientific_name if info.plant else None,
            })
            
        return success_response(
            message="Plant details",
            data=plant
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
            return error_response(
                message="History not found.",
                status_code=404
            )
        
        plant_history = []
        for info in data:
            plant_history.append({
                "image_path": info.image_path,
                "name": info.identified_name,
                "confidence_score": info.confidence_score,
                "timestamp": info.scan_timestamp 
            })

        return success_response(
            message="Plant history",
            data=plant_history
        )
        
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
        
        Scan_history.query.filter_by(user_id=user_id, plant_id=None).delete(synchronize_session=False)
        
        if plant_id_list:
            plants_to_delete = Plant.query.filter(Plant.id.in_(plant_id_list)).all()
            for plant in plants_to_delete:
                db.session.delete(plant)

        db.session.commit()
        
        return success_response(message="History deleted.")
    
    except Exception as e:
        return error_response(str(e))
