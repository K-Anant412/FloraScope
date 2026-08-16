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