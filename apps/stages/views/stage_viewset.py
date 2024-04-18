from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser

from apps.stages.serializers.serializer import StageSerializer
from apps.stages.models import Stage

class StageViewSet(ModelViewSet):
    serializer_class = StageSerializer
    queryset = Stage.objects.all()
    
    def get_permissions(self):
        if self.action != 'list':
            return [IsAdminUser()]
        
        return super().get_permissions()
