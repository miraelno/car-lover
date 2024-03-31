from django.db import models
from django.utils.translation import gettext_lazy as _


class Stage(models.Model):
    name = models.CharField(_("name"), max_length=50)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = _("stage")
        verbose_name_plural = _("stages")
        db_table = 'stage'