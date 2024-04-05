from rest_framework import serializers
from apps.documents.models import Document
from django.core.files.storage import default_storage
from django.core.files.storage import FileSystemStorage
from django.core.files import File



class FileUploadSerializer(serializers.ModelSerializer):
    file = serializers.FileField()
    
    class Meta:
        model = Document
        fields = ['name', 'file', 'uploaded_on']
        
        
    def create(self, validated_data):
        fs = FileSystemStorage()
        file = validated_data['file']
        file_name = default_storage.save(file.name, file)
        document = Document.objects.create(name=file_name, file=file)
        return document
        