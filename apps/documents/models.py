from typing import Iterable

from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.cars.models import Car
from apps.documents.tasks import send_new_document_notification_email
from apps.users.models import User


class Document(models.Model):
    DOCUMENT_TYPES = {"INV": "Invoice", "CON": "Contract"}
    name = models.CharField(max_length=255)
    file = models.FilePathField(path="media/")
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    document_type = models.CharField(max_length=50, choices=DOCUMENT_TYPES)
    uploaded_on = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = _("document")
        verbose_name_plural = _("documents")
        db_table = "document"

    def save(self, *args, **kwargs) -> None:
        is_need_send = self.car.user.notification_settings.get().on_document_adding

        if is_need_send:
            send_new_document_notification_email(self.car.user.email, self.car)

        return super().save(*args, **kwargs)
