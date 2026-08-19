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


def fetch_perenual_details(scientific_name):
    """Fetches care guidelines and toxicity info from Perenual API."""
    api_key = os.getenv("PERENUAL_API_KEY")
    if not api_key:
        return {}

    search_url = f"https://perenual.com/api/v2/species-list?key={api_key}&q={scientific_name}"
    try:
        search_res = requests.get(search_url, timeout=5).json()
        data_list = search_res.get("data", [])
        if not data_list:
            return {}

        species_id = data_list[0].get("id")
        details_url = f"https://perenual.com/api/v2/species/details/{species_id}?key={api_key}"
        return requests.get(details_url, timeout=5).json()
    except requests.RequestException:
        return {}