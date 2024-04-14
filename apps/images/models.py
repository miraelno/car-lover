from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.cars.models import Car
from apps.stages.models import Stage
from apps.images.tasks import send_new_image_notification_email

class Image(models.Model):
    name = models.CharField(max_length=255)
    file = models.FilePathField(path='media/')
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    stage = models.ForeignKey(Stage, on_delete=models.DO_NOTHING)
    uploaded_on = models.DateTimeField(auto_now_add=True)

    
    def __str__(self) -> str:
        return self.name
    
    
    class Meta:
        verbose_name = _("image")
        verbose_name_plural = _("images")
        db_table = "images"

    
    def save(self, *args, **kwargs) -> None:
        send_new_image_notification_email(self.car.user.email, self.stage, self.car)
        return super().save(*args, **kwargs)