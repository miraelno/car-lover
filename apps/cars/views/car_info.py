from rest_framework import generics
from rest_framework.response import Response

from apps.cars.models import Car
from apps.cars.serializers.car_info import CarInformationSerializer


class CarInfoRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = CarInformationSerializer

    def get_queryset(self):
        user = self.request.user
        car_id = self.kwargs["pk"]
        return Car.objects.filter(id=car_id, user_id=user)


class CarInfoListAPIView(generics.ListAPIView):
    serializer_class = CarInformationSerializer

    def get_queryset(self):
        user = self.request.user
        return Car.objects.filter(user_id=user)
