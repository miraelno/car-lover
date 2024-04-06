from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from rest_framework.viewsets import ModelViewSet
from apps.images.models import Image
from django.core.files.storage import FileSystemStorage

from apps.images.serializers import ImageSerializer


class ImageViewSet(ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = ImageSerializer
    
    
    def get_queryset(self):
        match self.action:
            case 'list' | 'destroy' :
                return Image.objects.filter(car=self.request.user)
            case _:
                return super().get_queryset()