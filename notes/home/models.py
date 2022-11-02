from django.db import models


class Notes(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created_at=models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "notes"
