import os
import requests

def success_response(message, data=None, status_code=200):
    return({
        "message": message,
        "success": True,
        "data": data
    }), status_code
    
def error_response(message, status_code=400):
    return({
        "message": message,
        "success": False,
        "data": None
    }), status_code
    
def auth_response(message, data=None, access=None ,status_code=200):
    return ({
        "message": message,
        "success": True,
        "data": data,
        "access_token": access
    }), status_code
    
def plant_identification_response(
    raw_api_data: dict,
    message: str = "Plant identified successfully",
    status_code: int = 200,
    ):
    
    """Formats raw Plant API response into a clean, UI-ready structure."""
    results = raw_api_data.get("results", [])

    candidates = []
    for item in results:
        species = item.get("species", {})
        gbif_info = item.get("gbif") or {}
        powo_info = item.get("powo") or {}

        candidates.append(
            {
                "confidence_score": round(item.get("score", 0.0), 4),
                "confidence_percentage": f"{round(item.get('score', 0.0) * 100, 2)}%",
                "scientific_name": species.get(
                    "scientificNameWithoutAuthor"
                ),
                "full_scientific_name": species.get(
                    "scientificName"
                ), 
                "common_names": species.get("commonNames", []),
                "primary_common_name": (
                    species.get("commonNames")[0]
                    if species.get("commonNames")
                    else None
                ),
                "family": species.get("family", {}).get(
                    "scientificNameWithoutAuthor"
                ),
                "genus": species.get("genus", {}).get(
                    "scientificNameWithoutAuthor"
                ),
                "gbif_id": gbif_info.get("id"),
                "powo_id": powo_info.get("id"),
            }
        )

    top_match = candidates[0] if candidates else None

    predicted_organs = raw_api_data.get("predictedOrgans", [])
    primary_organ = (
        predicted_organs[0].get("organ") if predicted_organs else None
    )

    formatted_data = {
        "best_match": top_match,
        "alternatives": candidates[1:] if len(candidates) > 1 else [],
        "detected_organ": primary_organ,
        "remaining_quota": raw_api_data.get(
            "remainingIdentificationRequests", 0
        ),
    }

    return ({
        "message": message,
        "success": True,
        "data": formatted_data,
    }), status_code
    
def fetch_wikipedia_details(scientific_name, common_name=None):
    """Fetches plant description and thumbnail from Wikipedia REST API."""
    headers = {"User-Agent": "PlantApp/1.0 (contact@yourdomain.com)"}
    names_to_try = [scientific_name]
    if common_name:
        names_to_try.append(common_name)

    for name in names_to_try:
        url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{name.replace(' ', '_')}"
        try:
            res = requests.get(url, headers=headers, timeout=5)
            if res.status_code == 200:
                data = res.json()
                return {
                    "description": data.get("extract"),
                    "image_url": data.get("thumbnail", {}).get("source")
                }
        except requests.RequestException:
            continue
    return {}

# def fetch_perenual_details(scientific_name):
#     """Fetches care guidelines and toxicity info from Perenual API."""
#     api_key = os.getenv("PERENUAL_API_KEY")
#     if not api_key:
#         return {}

#     search_url = f"https://perenual.com/api/v2/species-list?key={api_key}&q={scientific_name}"
#     try:
#         search_res = requests.get(search_url, timeout=5).json()
#         data_list = search_res.get("data", [])
#         print("Data Is-->", data_list)
#         if not data_list:
#             return {}
        
#     except requests.RequestException:
#         return {}
def fetch_perenual_details(scientific_name):
    """Fetch Perenual species information using scientific name."""

    api_key = os.getenv("PERENUAL_API_KEY")

    if not api_key:
        return {}

    search_url = (
        f"https://perenual.com/api/v2/species-list"
        f"?key={api_key}&q={scientific_name}"
    )

    try:
        response = requests.get(search_url, timeout=5)
        response.raise_for_status()

        search_res = response.json()

        data_list = search_res.get("data", [])

        print("Perenual Data --->", data_list)

        if not data_list:
            return {}

        species = data_list[0]

        return {
            "id": species.get("id"),
            "common_name": species.get("common_name"),
            "scientific_name": species.get("scientific_name", []),
            "family": species.get("family"),
        }

    except requests.RequestException as e:
        print("Perenual API Error:", e)
        return {}
    
def create_care_guide(species_id):
    "Create the care guide"
    try:
        api_key=os.getenv("PERENUAL_API_KEY")
        if not api_key:
            return {}
        print("From Function>>>>>>",species_id)
        details_url = f"https://perenual.com/api/v2/species/details/{species_id}?key={api_key}"
        
        response = requests.get(details_url, timeout=5)
        print(response.status_code)
        print(response.text)
        response.raise_for_status()

        data = response.json()
        print("Take this: ",data)
        
        return {
            "watering": {
                "frequency": data.get("watering"),
                "benchmark": {
                    "value": data.get("watering_general_benchmark", {}).get("value"),
                    "unit": data.get("watering_general_benchmark", {}).get("unit")
                }
            },

            "sunlight": data.get("sunlight", []),

            "soil": data.get("soil", []),

            "hardiness": {
                "min": data.get("hardiness", {}).get("min"),
                "max": data.get("hardiness", {}).get("max")
            },

            "pruning": {
                "months": data.get("pruning_month", []),
                "amount": data.get("pruning_count", {}).get("amount"),
                "interval": data.get("pruning_count", {}).get("interval")
            },

            "propagation": data.get("propagation", []),

            "attracts": data.get("attracts", []),

            "pests": data.get("pest_susceptibility", []),

            "flowering": {
                "flowers": data.get("flowers"),
                "season": data.get("flowering_season")
            },

            "fruiting": {
                "fruits": data.get("fruits"),
                "edible": data.get("edible_fruit"),
                "season": data.get("fruiting_season")
            },

            "harvesting": {
                "season": data.get("harvest_season"),
                "method": data.get("harvest_method")
            },

            "growth": {
                "rate": data.get("growth_rate"),
                "maintenance": data.get("maintenance"),
                "care_level": data.get("care_level")
            },

            "characteristics": {
                "leaf": data.get("leaf"),
                "flowers": data.get("flowers"),
                "cones": data.get("cones"),
                "drought_tolerant": data.get("drought_tolerant"),
                "salt_tolerant": data.get("salt_tolerant"),
                "thorny": data.get("thorny"),
                "invasive": data.get("invasive"),
                "rare": data.get("rare"),
                "tropical": data.get("tropical"),
                "cuisine": data.get("cuisine"),
                "medicinal": data.get("medicinal"),
                "edible_leaf": data.get("edible_leaf"),
                "edible_fruit": data.get("edible_fruit")
            }
        }

    except requests.RequestException:
        return {}