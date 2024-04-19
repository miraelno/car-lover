from drf_spectacular.utils import extend_schema
from rest_framework import generics

from apps.users.serializers.user_info import UserInformationSerializer


@extend_schema(tags=["Users"])
class UserInfoRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = UserInformationSerializer

    def get_object(self):
        return self.request.user

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)
