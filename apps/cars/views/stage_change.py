from drf_spectacular.utils import extend_schema
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from apps.cars.models import Car
from apps.cars.serializers.stage_change import StageChangeSerializer


@extend_schema(tags=["Cars"])
class StageChangeUpdateAPIView(generics.UpdateAPIView):
    queryset = Car.objects.all()
    lookup_field = "pk"
    serializer_class = StageChangeSerializer
    permission_classes = [IsAdminUser]
