from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.stages.models import Stage
from apps.cars.models import Car


class Schedule(models.Model):
    start_date = models.DateField(_("start_date"), blank=True, null=True)
    stage = models.ForeignKey(Stage, on_delete=models.SET_NULL, null=True, blank=True)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
