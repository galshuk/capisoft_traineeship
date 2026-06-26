from rest_framework.exceptions import APIException

class NoAuthToken(APIException):
    status_code = 401
    default_detail = "No authentication token provided."

class InvalidAuthToken(APIException):
    status_code = 401
    default_detail = "Invalid authentication token."

class FirebaseError(APIException):
    status_code = 401
    default_detail = "Firebase error."
