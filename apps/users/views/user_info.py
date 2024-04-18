from rest_framework import generics

from apps.users.serializers.user_info import UserInformationSerializer

class UserInfoRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = UserInformationSerializer

    def get_queryset(self):
        return super().get_queryset()

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)
