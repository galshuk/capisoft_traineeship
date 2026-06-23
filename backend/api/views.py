from rest_framework import viewsets
from .models import Client, User
from .serializers import ClientSerializer, UserSerializer

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  # what data the view operates on
    serializer_class = UserSerializer  # what serializer to use for converting to JSON


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
