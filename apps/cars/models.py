import uuid

from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.stages.models import Stage
from apps.users.models import User


class Car(models.Model):
    id = models.UUIDField(_("id"), primary_key=True, default=uuid.uuid4)
    model = models.CharField(_("model"), max_length=150)
    vin_code = models.CharField(_("vin code"), max_length=150, blank=True, default="")
    number = models.CharField(_("number"), max_length=20)
    mileage = models.CharField(_("mileage"), max_length=20, blank=True, default="")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="cars")
    stage = models.ForeignKey(
        Stage, on_delete=models.SET_NULL, null=True, related_name="stage"
    )

    def __str__(self):
        return self.number

    class Meta:
        verbose_name = _("car")
        verbose_name_plural = _("cars")
        db_table = "car"
