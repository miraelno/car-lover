from drf_spectacular.utils import extend_schema
from rest_framework import generics

from apps.cars.models import Car
from apps.cars.serializers.car_info import CarInformationSerializer


@extend_schema(tags=["Cars"])
class CarInfoRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = CarInformationSerializer

    def get_queryset(self):
        user = self.request.user
        car_id = self.kwargs["pk"]
        return Car.objects.filter(id=car_id, user_id=user)


@extend_schema(tags=["Cars"])
class CarInfoListAPIView(generics.ListAPIView):
    serializer_class = CarInformationSerializer

    def get_queryset(self):
        user = self.request.user
        return Car.objects.filter(user_id=user)
