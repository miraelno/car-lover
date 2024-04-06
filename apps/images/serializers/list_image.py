from rest_framework import serializers
from apps.images.models import Image
from django.conf import settings

from apps.cars.models import Car


class ListImageSerializer(serializers.ModelSerializer):
    file = serializers.FilePathField(path=settings.MEDIA_URL)
    car = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta:
        model = Image
        fields = ['name', 'file','car','stage','uploaded_on']