from .models import PromptagramModel, UserModel
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'


class PromptagramSerializer(serializers.ModelSerializer):
    class Meta:
        model = PromptagramModel
        fields = '__all__'
