from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

# Create your models here.
class PromptagramModel(models.Model):
    imageURL = models.CharField(max_length=500)
    description = models.CharField(max_length=300)
    dateCreated = models.DateTimeField(default=timezone.now)
    foreignKeyUser = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

