from datetime import datetime, timezone
from App import db


class User(db.Model):
    """Application users"""

    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False, index=True)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(
        db.DateTime, default=lambda: datetime.now(timezone.utc), nullable=False
    )
    is_active = db.Column(db.Boolean, default=True, nullable=False)
    scans = db.relationship(
        "Scan_history", backref="user", lazy=True, cascade="all, delete-orphan"
    )
    
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "is_active": self.is_active,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }


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
    is_favorite = db.Column(db.Boolean, default=False, server_default=db.text("0"), nullable=False)
    perenual_species_id = db.Column( db.Integer, unique=True, nullable=True, index=True )

    scan = db.relationship(
        "Scan_history", backref="plant", lazy=True, cascade="all, delete-orphan"
    )

    care = db.relationship(
        "Plant_care", backref="plant", lazy=True, cascade="all, delete-orphan", uselist=False
    )
    
    def to_dict(self):
        return {
            "id": self.id,
            "scientific_name": self.scientific_name,
            "common_name": self.common_name,
            "image_url": self.image_url,
            "family": self.family,
            "description": self.description,
            "is_favorite": self.is_favorite,
        }


class Scan_history(db.Model):
    """History of plant identification scans"""

    __tablename__ = "scan_history"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    plant_id = db.Column(db.Integer, db.ForeignKey("plant.id"), nullable=True)
    image_path = db.Column(db.String(600), nullable=False)
    identified_name = db.Column(db.String(300))
    confidence_score = db.Column(db.Float, default=0.0)
    identification_status = db.Column(db.String(50), default="success")
    scan_timestamp = db.Column(
        db.DateTime, default=lambda: datetime.now(timezone.utc), nullable=False
    )
    
    def to_dict(self):
        return {
            "scan_id": self.id,
            "scanned_at": self.scan_timestamp.isoformat() if self.scan_timestamp else None,
            "plant": self.plant.to_dict() if self.plant else None,
        }

class Plant_care(db.Model):

    """Plant care guide information fetched from Perenual."""

    __tablename__ = "plant_care"

    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True
    )

    plant_id = db.Column(
        db.Integer,
        db.ForeignKey("plant.id"),
        unique=True,
        nullable=False
    )

    watering = db.Column(db.String(50))
    watering_benchmark = db.Column(db.String(50))
    watering_benchmark_unit = db.Column(db.String(30))
    sunlight_requirement = db.Column(db.Text)
    soil_type = db.Column(db.Text)
    hardiness_min = db.Column(db.Float)
    hardiness_max = db.Column(db.Float)
    pruning_months = db.Column(db.Text)
    pruning_amount = db.Column(db.Float)
    pruning_interval = db.Column(db.String(50))
    propagation = db.Column(db.Text)
    attracts = db.Column(db.Text)
    pest_susceptibility = db.Column(db.Text)
    flowering_season = db.Column(db.String(100))
    fruiting_season = db.Column(db.String(100))
    harvest_season = db.Column(db.String(100))
    harvest_method = db.Column(db.String(100))
    growth_rate = db.Column(db.String(50))
    maintenance = db.Column(db.String(50))
    care_level = db.Column(db.String(50))
    flowers = db.Column(db.Boolean)
    cones = db.Column(db.Boolean)
    fruits = db.Column(db.Boolean)
    leaf = db.Column(db.Boolean)
    edible_fruit = db.Column(db.Boolean)
    edible_leaf = db.Column(db.Boolean)
    medicinal = db.Column(db.Boolean)
    drought_tolerant = db.Column(db.Boolean)
    salt_tolerant = db.Column(db.Boolean)
    thorny = db.Column(db.Boolean)
    invasive = db.Column(db.Boolean)
    rare = db.Column(db.Boolean)
    tropical = db.Column(db.Boolean)
    cuisine = db.Column(db.Boolean)

    created_at = db.Column(
        db.DateTime,
        default=db.func.current_timestamp()
    )

    updated_at = db.Column(
        db.DateTime,
        default=db.func.current_timestamp(),
        onupdate=db.func.current_timestamp()
    )
