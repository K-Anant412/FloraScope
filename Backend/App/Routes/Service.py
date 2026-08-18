from App.models import Scan_history, Plant, Plant_care, User
from App.Utils.Response import error_response, success_response
from flask import request, Blueprint
from werkzeug.utils import secure_filename
from datetime import timedelta
from App import db

service_route = Blueprint("plant", __name__)
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'webp'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@service_route.route("/identify", methods=["POST"])
def identify():
    """
    Plant Identification Endpoint
    ---
    tags:
      - Plant Identification
    consumes:
      - multipart/form-data
    parameters:
      - in: formData
        name: image
        type: file
        required: true
        description: Plant image to identify
    responses:
      200:
        description: Image uploaded successfully
      400:
        description: No image provided, no file selected, or invalid file format
      500:
        description: Internal server error
    """
    try:
        if 'image' not in request.files:
            return error_response(message="No image file provided in the request.", status_code=400)

        file = request.files["image"]
        
        if file.filename == '':
            return error_response(message="No selected file.", status_code=400)
        
        if not allowed_file(file.filename):
            return error_response(message="Invalid file format.")
        
        return success_response(message="File sent successfully.", data=file.filename)
    except Exception as e:
        return error_response(str(e))