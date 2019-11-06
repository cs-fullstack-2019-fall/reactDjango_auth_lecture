from django.db import models
from django.utils import timezone

class UserModel(models.Model):
    username = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200)

# Create your models here.
class PromptagramModel(models.Model):
    imageURL = models.CharField(max_length=500)
    description = models.CharField(max_length=300)
    dateCreated = models.DateTimeField(default=timezone.now)
    foreignKeyUser = models.ForeignKey(UserModel, on_delete=models.CASCADE, null=True)

