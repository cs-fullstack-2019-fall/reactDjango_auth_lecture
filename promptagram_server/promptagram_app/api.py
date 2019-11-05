from django.contrib.auth.models import User
from .models import PromptagramModel
from rest_framework import viewsets
from .serializers import UserSerializer, PromptagramSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class PromptagramViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = PromptagramModel.objects.all()
    serializer_class = PromptagramSerializer