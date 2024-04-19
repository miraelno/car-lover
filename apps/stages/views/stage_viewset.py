from drf_spectacular.utils import extend_schema
from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from apps.stages.models import Stage
from apps.stages.serializers.serializer import StageSerializer


@extend_schema(tags=["Stages"])
class StageViewSet(ModelViewSet):
    serializer_class = StageSerializer
    queryset = Stage.objects.all()

    def get_permissions(self):
        if self.action != "list":
            return [IsAdminUser()]

        return super().get_permissions()
