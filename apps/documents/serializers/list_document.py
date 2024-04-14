from django.conf import settings
from rest_framework import serializers

from apps.documents.models import Document


class ListDocumentSerializer(serializers.ModelSerializer):
    file = serializers.FilePathField(path=settings.MEDIA_URL)
    name = serializers.CharField(required=False)

    class Meta:
        model = Document
        fields = ["name", "file", "document_type", "uploaded_on"]
