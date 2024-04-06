from django.core.files.storage import FileSystemStorage
from rest_framework.parsers import FormParser
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from apps.images.models import Image
from apps.images.serializers.list_image import ListImageSerializer
from apps.images.serializers.upload_delete_image import UploadDeleteImageSerializer


class ImageViewSet(ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = UploadDeleteImageSerializer

    def get_serializer_class(self):
        match self.action:
            case "list":
                return ListImageSerializer
            case _:
                return super().get_serializer_class()

    def get_queryset(self):
        match self.action:
            case "destroy":
                return Image.objects.filter(car__user__id=self.request.user.id)
            case "retrieve":
                return Image.objects.filter(car=self.kwargs["pk"])
            case _:
                return super().get_queryset()

    def retrieve(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        stage = self.request.query_params.get("stage")

        if stage is not None:
            queryset = queryset.filter(stage=stage)

        serializer = ListImageSerializer(queryset, many=True)
        return Response(serializer.data)

    def perform_destroy(self, instance):
        fs = FileSystemStorage()
        fs.delete(instance.name)
        instance.delete()
