from django.shortcuts import render
from .models import UserModel, PromptagramModel
from .serializers import PromptagramSerializer
from django.http import HttpResponse, JsonResponse
# from rest_framework.parsers import JSONParser
from json import loads


# Create your views here.
def auth_users(request):
    requestBodyInfo = loads(request.body)
    bodyUsername = requestBodyInfo["username"]
    bodyPassword = requestBodyInfo["password"]

    allUsers = UserModel.objects.filter(username=bodyUsername)


    if(allUsers):
        if allUsers[0].password == bodyPassword:
            return HttpResponse(allUsers[0].id)
        else:
            return HttpResponse(False)
    else:
        return HttpResponse(False)


def get_userid(request, username):
    userID = UserModel.objects.filter(username=username)
    return HttpResponse(userID[0].id)


def get_user_models(request, userID):
    print(PromptagramModel.objects.filter(foreignKeyUser=userID))
    print(userID)
    allUserModels = PromptagramModel.objects.filter(foreignKeyUser=userID)
    serializer = PromptagramSerializer(allUserModels, many=True)
    return JsonResponse(serializer.data, safe=False)
