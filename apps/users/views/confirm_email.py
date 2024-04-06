from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status

from apps.users.serializers.confirm_email import ConfirmEmailSerializer


class EmailConfirmationView(generics.GenericAPIView):
    permission_classes = [
        AllowAny,
    ]

    def get(self, request, *args, **kwargs):
        data = {
            "token_id": request.query_params["token_id"],
            "user_id": request.query_params["user_id"],
        }

        serializer = ConfirmEmailSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)
