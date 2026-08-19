from App.models import Scan_history, Plant, Plant_care, User
from App.Utils.Response import error_response, success_response, plant_identification_response
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

        params = {
            "api-key": api_key
        }

        files = {
            "images": (
                file.filename,
                file.stream,
                file.mimetype
            )
        }

        data = {
            "organs": "auto"
        }

        response = requests.post(
            url,
            params=params,
            files=files,
            data=data,
            timeout=30
        )

        if response.status_code != 200:
            return error_response(
                message=f"PlantNet API error: {response.text}",
                status_code=response.status_code
            )

        raw_api_data = response.json()

        formatted_response = plant_identification_response(raw_api_data)

        formatted_data = formatted_response[0]["data"]
        
        best_match = formatted_data["best_match"]
        
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
            
        plant = Plant.query.filter_by(
            scientific_name = scientific_name
        ).first()
        if not plant:
            
            plant = Plant(
                scientific_name=scientific_name,
                common_name=common_name,
                family=family
            )
            db.session.add(plant)
            db.session.flush()
            
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
        return error_response(
            message="Plant identification service timed out.",
            status_code=504
        )

    except requests.exceptions.RequestException as e:
        return error_response(
            message=f"Plant identification service error: {str(e)}",
            status_code=502
        )

    except Exception as e:
        return error_response(
            message=str(e),
            status_code=500
        )
        
  
@service_route.route("/history", methods=["GET"])
@jwt_required()
def history():
    """
    Get All History for Logged-in User
    ---
    tags:
      - User History
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
  
        
