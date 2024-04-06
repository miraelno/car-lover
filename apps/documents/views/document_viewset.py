from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from rest_framework.viewsets import ModelViewSet
from apps.documents.models import Document
from django.core.files.storage import FileSystemStorage

from apps.documents.serializers.upload_document import UploadDocumentSerializer
from apps.documents.serializers.list_document import ListDocumentSerializer


class DocumentViewSet(ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = UploadDocumentSerializer
    queryset = Document.objects.all()
    
    
    def get_serializer_class(self):
        match self.action:
            case 'list':
                return ListDocumentSerializer
            case _:
                return super().get_serializer_class()
    
    def get_queryset(self):
        match self.action:
            case 'list' | 'destroy' :
                return Document.objects.filter(owner=self.request.user)
            case _:
                return super().get_queryset()
    
    def perform_destroy(self, instance):
        fs = FileSystemStorage()
        fs.delete(instance.name)
        instance.delete()
