from drf_spectacular.utils import extend_schema
from rest_framework import generics
from apps.users.serializers.update_password import UpdatePasswordSerializer
from rest_framework.permissions import AllowAny
from apps.users.models import User
from rest_framework.response import Response


@extend_schema(tags=["Users"])
class UpdatePasswordView(generics.UpdateAPIView):
    serializer_class = UpdatePasswordSerializer

    def get_object(self, queryset=None):
        return self.request.user

    # def put(self, request, *args, **kwargs):
    #     user = UpdatePasswordSerializer(data=request.data, context={'request': request})
    #     user.is_valid(raise_exception=True)
    #     user.update()
    #     return Response({'user': user})
