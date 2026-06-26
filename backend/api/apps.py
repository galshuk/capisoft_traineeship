from django.apps import AppConfig

# App boot-up - everything that needs to happen with app initialization happens here

class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        from . import authentication
