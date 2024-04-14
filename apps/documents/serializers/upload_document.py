from django.core.files.storage import FileSystemStorage
from rest_framework import serializers

from apps.documents.models import Document
from apps.cars.models import Car


class UploadDocumentSerializer(serializers.ModelSerializer):
    file = serializers.FileField(write_only=True)
    name = serializers.CharField(required=False)
    car = serializers.PrimaryKeyRelatedField(queryset=Car.objects.all())
    
    class Meta:
        model = Document
        fields = ["name", "file", "car", "document_type", "uploaded_on"]

    def create(self, validated_data):
        car = validated_data["car"]
        fs = FileSystemStorage()
        request_file = validated_data["file"]
        file = fs.save(request_file.name, request_file)
        file_url = fs.url(file)
        document = Document.objects.create(name=file, file=file_url, car=car, document_type=validated_data["type"])
        return document
