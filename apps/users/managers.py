from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import BaseUserManager


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password, first_name="", last_name="", phone=""):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)
        user = self.model(email=email)
        user.password = make_password(password)
        user.first_name = first_name
        user.last_name = last_name
        user.phone = phone
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email=email, password=password)

        user.is_staff = True
        user.is_email_verified = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
