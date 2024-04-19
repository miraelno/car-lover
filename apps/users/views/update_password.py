from drf_spectacular.utils import extend_schema
from rest_framework import generics

from apps.users.serializers.update_password import UpdatePasswordSerializer


@extend_schema(tags=["Users"])
class UpdatePasswordView(generics.UpdateAPIView):
    serializer_class = UpdatePasswordSerializer

    def get_object(self, queryset=None):
        return self.request.user
