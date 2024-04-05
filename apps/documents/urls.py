from django.urls import path
from apps.documents.views.upload_document import FileUploadAPIView

app_name = 'documents'

urlpatterns = [
    path('upload-file/', FileUploadAPIView.as_view(), name='upload-file'),
]

