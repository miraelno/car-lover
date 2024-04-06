from rest_framework import serializers
from apps.images.models import Image
from django.core.files.storage import FileSystemStorage
from django.conf import settings

class ImageSerializer(serializers.ModelSerializer):
    file = serializers.FileField()
    name = serializers.CharField(required=False)
    car = serializers.PrimaryKeyRelatedField()
    
    class Meta:
        model = Image
        fields = ['name', 'file','car','stage', 'uploaded_on']
        
        
    def create(self, validated_data):
        user =  self.context['request'].user
        fs = FileSystemStorage()
        request_file = validated_data['file']
        file = fs.save(request_file.name, request_file)
        file_url = fs.url(file)
        image = Image.objects.create(name=request_file.name, file=file_url, car=user)
        return image

    
    def destroy(self, validated_data):
        file_path = Image.objects.get(id=validated_data['id'])
        fs = FileSystemStorage()
        fs.delete(file_path)
        return file_path
        