from django.db import models
from django.utils import timezone

class UserModel(models.Model):
    # Each username has to be unique so no one else can use it.
    username = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.username + " is awesome!!"

# Create your models here.
class PromptagramModel(models.Model):
    imageURL = models.CharField(max_length=500)
    description = models.CharField(max_length=300)
    dateCreated = models.DateTimeField(default=timezone.now)
    # Tie it to the user that created the prompt
    foreignKeyUser = models.ForeignKey(UserModel, on_delete=models.CASCADE, null=True)

