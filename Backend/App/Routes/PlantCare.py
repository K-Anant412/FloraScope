import os
import requests


PLANT_DATA_API_URL = os.getenv(
    "PLANT_DATA_API_URL",
    "http://192.168.31.136:5000"
)


def get_plant_care(
    scientific_name,
    common_name=None,
    plant_id=None
):
    url = f"{PLANT_DATA_API_URL}/api/plants/extract"

    payload = {
        "scientific_name": scientific_name,
        "common_name": common_name,
        "plant_id": plant_id
    }

    try:
        response = requests.post(
            url,
            json=payload,
            timeout=120
        )

        response.raise_for_status()

        return response.json()

    except requests.RequestException as e:
        print(f"PlantData API error: {e}")
        return None