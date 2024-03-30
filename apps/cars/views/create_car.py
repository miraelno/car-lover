from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework import status
from rest_framework.response import Response

from apps.cars.models import Car
from apps.cars.serializers.create_car import CreateCarSerializer

class CreateCar(generics.CreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CreateCarSerializer
    permission_classes = [IsAdminUser]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
