from .models import PromptagramModel, UserModel
from rest_framework import viewsets
from .serializers import UserSerializer, PromptagramSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class PromptagramViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = PromptagramModel.objects.all()
    serializer_class = PromptagramSerializer


class PromptagramByUserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = PromptagramModel.objects.all()
    serializer_class = PromptagramSerializer