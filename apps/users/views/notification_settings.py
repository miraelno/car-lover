
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from apps.users.models import NotificationSettings
from apps.users.serializers.notification_settings import NotificationSettingsSerializer

class NotificationSettingsAPIView(APIView):

    def get(self, request):
        user = request.user
        notification_settings = NotificationSettings.objects.get_or_create(user=user)[0]
        serializer = NotificationSettingsSerializer(notification_settings)
        return Response(serializer.data)

    def put(self, request):
        user = request.user
        notification_settings = NotificationSettings.objects.get_or_create(user=user)[0]
        serializer = NotificationSettingsSerializer(notification_settings, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)