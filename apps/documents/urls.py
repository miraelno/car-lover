from django.urls import path
from django.urls import include

from rest_framework import routers
from apps.documents.views.upload_document import DocumentViewSet

app_name = 'documents'


router = routers.SimpleRouter()
router.register(r'document', DocumentViewSet, basename='Document')

urlpatterns = [
    # path('', DocumentViewSet.as_view({'post': 'create', 'get': 'list'}), name='upload-file'),
    path('', include(router.urls))
]

