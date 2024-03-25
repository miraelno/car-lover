from django.urls import path

from apps.users.views import SignUpView


app_name = 'users'

urlpatterns = [
    path('sign-up/', SignUpView.as_view(), name='signup'),
]