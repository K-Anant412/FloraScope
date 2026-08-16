from App.models import User
from App import db
from datetime import timedelta
from flask import request, Blueprint
from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash, generate_password_hash
from App.Utils.Response import success_response, error_response, auth_response

auth_route = Blueprint("auth", __name__)

@auth_route.route("/registration", methods=["POST"])
def register_new_user():
    """
    User Registration Endpoint
    ---
    tags:
      - Authentication
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          required:
            - name
            - email
            - password
          properties:
            name:
              type: string
              example: user
            email:
              type: string
              example: user@example.com
            password:
              type: string
              example: SecurePass123
    responses:
      201:
        description: User registered successfully
      400:
        description: Missing required fields
      409:
        description: Username or Email already registered
    """
    try:
        data = request.get_json()
        
        if not data:
            return error_response(message="Fill the required fields.", status_code=400)
        
        raw_name = data.get("name")
        raw_email = data.get("email")
        
        name =str(raw_name).strip()
        email = str(raw_email).strip().lower()
        password = data.get("password")
        
        if User.query.filter(User.name == name).first():
            return error_response(message="Username already registred.", status_code=409)
        
        if User.query.filter(User.email == email).first():
            return error_response(message="Email already registred.", status_code=409)
        
        secure_pass = generate_password_hash(password)
        
        new_user = User(name=name, email=email, password=secure_pass)
        
        db.session.add(new_user)
        db.session.commit()
        
        return success_response(message="New user registration successful.", data={"user":name, "email":email})
    
    except Exception as e:
        return error_response(str(e))
    

@auth_route.route("/login", methods=["POST"])
def login_user():
    """
      User Login Endpoint
      ---
      tags:
        - Authentication
      parameters:
        - in: body
          name: body
          required: true
          schema:
            type: object
            required:
              - email
              - password
            properties:
              email:
                type: string
                example: user@example.com
              password:
                type: string
                example: securePass123
      responses:
        200:
          description: Login successful, return JWT token
        400:
          description: Missing email or password
        401:
          description: Invalid email or password        
    """
    try:
        data = request.get_json()
        
        if not data or not data.get("email") or not data.get("password"):
            return error_response(message="All fields are required.", status_code=400)
        
        raw_email = data.get("email")
        password = data.get("password")
        
        email =str(raw_email).strip()
        user = User.query.filter_by(email = email).first()
        
        if not user:
            return error_response(message="User not exist.", status_code=401)
        
        check_password = check_password_hash(user.password, password)
        
        if not check_password:
            return error_response(message="Password wrong.", status_code=401)
        
        expires = timedelta(days=7)
        access_token = create_access_token(identity=(user.id), expires_delta=expires)
        
        return auth_response(message="Login successful", status_code=200, access=access_token)
    except Exception as e:
        return error_response(str(e))

    