from django.db import models


class Document(models.Model):
    name = models.CharField(max_length=255)
    file = models.FilePathField()
    uploaded_on = models.DateTimeField(auto_now_add=True)