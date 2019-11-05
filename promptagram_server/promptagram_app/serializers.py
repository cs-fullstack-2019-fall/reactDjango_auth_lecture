from django.contrib.auth.models import User
from .models import PromptagramModel
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class PromptagramSerializer(serializers.ModelSerializer):
    class Meta:
        model = PromptagramModel
        fields = '__all__'
