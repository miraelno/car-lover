from rest_framework import serializers
from apps.documents.models import Document
from django.core.files.storage import FileSystemStorage
from django.conf import settings


class UploadDocumentSerializer(serializers.ModelSerializer):
    file = serializers.FileField(write_only=True)
    name = serializers.CharField(required=False)

    class Meta:
        model = Document
        fields = ["name", "file", "uploaded_on"]

    def create(self, validated_data):
        user = self.context["request"].user
        fs = FileSystemStorage()
        request_file = validated_data["file"]
        file = fs.save(request_file.name, request_file)
        file_url = fs.url(file)
        document = Document.objects.create(name=file, file=file_url, owner=user)
        return document
