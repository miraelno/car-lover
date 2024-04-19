from drf_spectacular.utils import extend_schema
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from apps.cars.models import Car
from apps.cars.serializers.change_car_owner import ChangeCarOwnerSerializer


@extend_schema(tags=["Cars"])
class CarOwnerUpdateAPIView(generics.UpdateAPIView):
    queryset = Car.objects.all()
    lookup_field = "pk"
    serializer_class = ChangeCarOwnerSerializer
    permission_classes = [IsAdminUser]
