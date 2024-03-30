import uuid

from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

from apps.users.managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    
    id = models.UUIDField(_('id'), primary_key=True, default=uuid.uuid4)
    email = models.EmailField(_("email address"), unique=True)
    first_name = models.CharField(_("first name"), max_length=150, blank=True, default='')
    last_name = models.CharField(_("last name"), max_length=150, blank=True, default='')
    phone = models.CharField(_("phone number"), max_length=15, blank=True, default='')
    is_staff = models.BooleanField(
        _("staff status"),
        default=False,
        help_text=_("Designates whether the user can log into this admin site."),
    )
    is_active = models.BooleanField(
        _("active"),
        default=True,
        help_text=_(
            "Designates whether this user should be treated as active. "
            "Unselect this instead of deleting accounts."
        ),
    )
    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)
    updated_at = models.DateTimeField(_('updated'), auto_now=True)
    is_email_verified = models.BooleanField(_('email verified'), default=False)
    
    objects = CustomUserManager()
    
    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    
    def __str__(self) -> str:
        return self.email
    
    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")