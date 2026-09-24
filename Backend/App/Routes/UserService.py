from App.models import Scan_history, Plant, Plant_care, User
from App.Utils.Response import success_response, error_response
from flask import request, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity
from dotenv import load_dotenv
from App import db
import requests
import os

load_dotenv()

user_route = Blueprint("user", __name__)

@user_route.route("/get_user_info", methods=["GET"])
@jwt_required()
def show_user_details():
    """
    Get current user details
    ---
    tags:
        - User details
    security:
        - Bearer: []
    responses:
        200:
            description: Details of the current user
    """
    try:
        current_user_id = int(get_jwt_identity())
        
        user_details = User.query.filter_by(id=current_user_id).first()

        if not user_details:
            return error_response(message="User details not found", status_code=409)
        
        result = {
            "id": user_details.id,
            "name": user_details.name,
            "email": user_details.email,
            "is_active": user_details.is_active,
            "created_at": user_details.created_at.isoformat() if user_details.created_at else None
        }
        
        return success_response(message="User found", data=result)

    except Exception as e:
        return error_response(str(e))

@user_route.route("/user_profile", methods=["GET"])
@jwt_required()
def user_history():
    """
    Get details
    ---
    tags:
        - User details
    security:
        - Bearer: []
    responses:
        200:
            description: Details of the current user
    """
    try:
        user = User.query.get(int(get_jwt_identity()))
        if not user:
            return error_response("User not found", status_code=404)
        
        return success_response(
            message="User profile fetched successfully",
            data={
                "user": user.to_dict(),
                "scans": [scan.to_dict() for scan in user.scans],
                "favorites": [plant.to_dict() for plant in Plant.query.filter_by(is_favorite=True).all()]
            }
        )
        
    except Exception as e:
        return error_response(str(e))

@user_route.route("/remove_user", methods=["DELETE"])
@jwt_required()
def remove_user():
    """
    Removed user
    ---
    tags:
        - Remove user
    security:
        - Bearer: []
    responses:
        200:
            description: user found successfully
        404:
            description: user not found
    """
    try:
        user = User.query.get(int(get_jwt_identity()))
        
        if not user:
            return error_response(
                message="User not found",
                status_code=404
            )
        db.session.delete(user)
        db.session.commit()
        
        return success_response(
            message="User removed"
        )
    except Exception as e:
        return error_response(str(e))
