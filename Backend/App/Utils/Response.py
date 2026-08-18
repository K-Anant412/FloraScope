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