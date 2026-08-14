from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flasgger import Swagger
from flask_cors import CORS
from flask_migrate import Migrate
import os

from config import config_options

db = SQLAlchemy()
migrate = Migrate()
cors = CORS()
swagger_config = {
        "headers": [],
        "specs": [
            {
                "endpoint": 'apispec_1',
                "route": '/apispec_1.json',
                "rule_filter": lambda rule: True,
                "model_filter": lambda model: True,
            }
        ],
        "static_url_path": "/flasgger_static",
        "swagger_ui": True,
        "specs_route": "/apidocs/"
    }
swagger_template = {
        "swagger": "2.0",
        "info": {
            "title": "Plant identifier",
            "description": "Production-ready Plant identifier",
            "version": "1.0.0"
        },
        "securityDefinitions": {
            "Bearer": {
                "type": "apiKey",
                "name": "Authorization",
                "in": "header",
                "description": "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\""
            }
        }
    }
swagger = Swagger(config=swagger_config, template=swagger_template)


def create_app(config_name="development"):
    """Application factory"""
    
    app = Flask(__name__)
    
    allowed_origins = os.getenv("FRONTEND_URL", "http://localhost:5173").split(",")
    
    dev_origins = ["http://localhost:5000", "http://127.0.0.1:5000"]
    
    for origin in dev_origins:
        if origin not in allowed_origins:
            allowed_origins.append(origin)
            
    cors.init_app(
        app,
        resources={
            r"/api/*":
                {
                    "origins": allowed_origins,
                    "allow_headers": ["Content-Type"],
                    "supports_credientials": True
                }
        }
        )
    app.config.from_object(config_options[config_name])
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})
    swagger.init_app(app)
    
    from App import models
    
    return app