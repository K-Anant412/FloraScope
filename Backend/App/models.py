from datetime import datetime, timezone
from App import db

class User(db.Model):
    """Application users"""
    __tablename__ = "user"

    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    name = db.Column(
        db.String(150),
        nullable=False
    )

    email = db.Column(
        db.String(255),
        unique=True,
        nullable=False,
        index=True
    )

    password = db.Column(
        db.String(255),
        nullable=False
    )

    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        nullable=False
    )

    is_active = db.Column(
        db.Boolean,
        default=True,
        nullable=False
    )

    scans = db.relationship(
        "ScanHistory",
        backref="user",
        lazy=True,
        cascade="all, delete-orphan"
    )

class Plant(db.Model):
    """Plant information table"""
    __tablename__ = "plant"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    scientific_name = db.Column(db.String(300), unique=True)
    common_name = db.Column(db.String(300))
    image_url = db.Column(db.String(600))
    family = db.Column(db.Text)
    description = db.Column(db.Text)
    pet_toxicity_level = db.Column(db.String(50))
    human_toxicity_level = db.Column(db.String(50))
    pet_toxicity_description = db.Column(db.Text)
    human_toxicity_description = db.Column(db.Text)
    medicinal_uses = db.Column(db.Text)
    
    scan = db.relationship(
        "Scan_history",
        backref="plant",
        lazy=True,
        cascade="all, delete-orphan"
    )
    
    care = db.relationship(
        "Plant_care",
        backref="plant",
        lazy=True,
        cascade="all, delete-orphan"
    )
    
class ScanHistory(db.Model):
    """History of plant identification scans"""
    __tablename__ = "scan_history"

    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    plant_id = db.Column(
        db.Integer,
        db.ForeignKey("plant.id"),
        nullable=True
    )

    image_path = db.Column(
        db.String(600),
        nullable=False
    )

    identified_name = db.Column(
        db.String(300)
    )

    confidence_score = db.Column(
        db.Float,
        default=0.0
    )

    identification_status = db.Column(
        db.String(50),
        default="success"
    )

    scan_timestamp = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        nullable=False
    )
    
class Plant_care(db.Model):
    """Plant care tips"""
    __tablename__ = "plant_care"    
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    plant_id = db.Column(db.Integer, db.ForeignKey('plant.id'))
    sunlight_requirement = db.Column(db.String(300))
    watering_frequency = db.Column(db.Integer)
    watering_unit = db.Column(db.String(30), default="days")
    soil_type = db.Column(db.String(300))
    min_temp = db.Column(db.Float)
    max_temp = db.Column(db.Float)
    humidity = db.Column(db.Float)
    