from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from apps.cars.models import Car
from apps.cars.serializers.stage_change import StageChangeSerializer

# TODO: maybe i need to use body with car and stage id for celery??


class StageChangeUpdateAPIView(generics.UpdateAPIView):
    queryset = Car.objects.all()
    lookup_field = "pk"
    serializer_class = StageChangeSerializer
    permission_classes = [IsAdminUser]
