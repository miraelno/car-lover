from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response


class LogoutAPIView(APIView):
    def post(self, request):  
        request.user.auth_token.delete() 
        return Response(status=status.HTTP_205_RESET_CONTENT)