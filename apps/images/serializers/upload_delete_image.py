from rest_framework import serializers
from apps.images.models import Image
from apps.cars.models import Car
from django.core.files.storage import FileSystemStorage
from django.conf import settings


class UploadDeleteImageSerializer(serializers.ModelSerializer):
    file = serializers.FileField(write_only=True)
    name = serializers.CharField(required=False)
    car = serializers.PrimaryKeyRelatedField(queryset=Car.objects.all())

    class Meta:
        model = Image
        fields = ["name", "file", "car", "stage", "uploaded_on"]

    def create(self, validated_data):
        car = validated_data["car"]
        stage = validated_data["stage"]
        fs = FileSystemStorage()
        request_file = validated_data["file"]
        file = fs.save(request_file.name, request_file)
        file_url = fs.url(file)
        image = Image.objects.create(name=file, file=file_url, car=car, stage=stage)
        return image
