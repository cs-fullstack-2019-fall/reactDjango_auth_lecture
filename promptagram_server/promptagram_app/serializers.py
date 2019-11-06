from .models import PromptagramModel, UserModel
from rest_framework import serializers

# Serializers translate the objects to readable information on the client side.
# It turned the model into JSON, then a string

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'


class PromptagramSerializer(serializers.ModelSerializer):
    class Meta:
        model = PromptagramModel
        fields = '__all__'
