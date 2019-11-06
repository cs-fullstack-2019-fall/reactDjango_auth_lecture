from .models import PromptagramModel, UserModel
from rest_framework import viewsets
from .serializers import UserSerializer, PromptagramSerializer

# ModelViewSet allows for automatic CRUD

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    # Grabs all the information from your Model
    queryset = UserModel.objects.all()
    # Turns all the information into JSON
    serializer_class = UserSerializer


class PromptagramViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = PromptagramModel.objects.all()
    serializer_class = PromptagramSerializer


# class PromptagramByUserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = PromptagramModel.objects.all()
#     serializer_class = PromptagramSerializer