from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from rest_framework.viewsets import ModelViewSet
from apps.documents.models import Document
from django.core.files.storage import FileSystemStorage

from apps.documents.serializers.upload_document import DocumentUploadSerializer


class DocumentViewSet(ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = DocumentUploadSerializer
    
    
    def get_queryset(self):
        match self.action:
            case 'list' | 'destroy' :
                return Document.objects.filter(owner=self.request.user)
            case _:
                return super().get_queryset()
    
    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    
    def perform_destroy(self, instance):
        file_path = instance.file
        fs = FileSystemStorage()
        fs.delete(file_path)
        instance.delete()

    # def create(self, request, *args, **kwargs):
    #     serializer = DocumentUploadSerializer(data=request.data, context={'request': request})
        
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(
    #             serializer.data,
    #             status=status.HTTP_201_CREATED
    #         )
        
    #     return Response(
    #         serializer.errors,
    #         status=status.HTTP_400_BAD_REQUEST
    #     )

    # def list(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     serializer = DocumentListSerializer(queryset, many=True)
    #     serializer.is_valid()
    #     return Response(data=serializer.data, status=status.HTTP_200_OK)
        
