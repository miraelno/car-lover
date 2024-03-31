from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework import status
from rest_framework.response import Response

from apps.cars.models import Car
from apps.cars.serializers.create_car import CreateCarSerializer

#TODO: add email notification 

class CreateCarAPIView(generics.CreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CreateCarSerializer
    permission_classes = [IsAdminUser]
