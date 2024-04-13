from django.db import models
from django.utils.translation import gettext_lazy as _

from apps.users.models import User


class Document(models.Model):
    name = models.CharField(max_length=255)
    file = models.FilePathField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    # TODO: enum of document categories
    uploaded_on = models.DateTimeField(auto_now_add=True)

    
    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = _("document")
        verbose_name_plural = _("documents")
        db_table = "document"
