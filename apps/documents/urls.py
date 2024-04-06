from django.urls import path
from django.urls import include

from rest_framework import routers
from apps.documents.views.document_viewset import DocumentViewSet

app_name = 'documents'

router = routers.SimpleRouter()
router.register(r'document', DocumentViewSet, basename='Document')

urlpatterns = [
    path('', include(router.urls))
]

