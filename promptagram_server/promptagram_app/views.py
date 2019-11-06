from .models import UserModel, PromptagramModel
from .serializers import PromptagramSerializer
from django.http import HttpResponse, JsonResponse
from json import loads


# Create your views here.
def auth_users(request):
    # Use loads to get the request info from the body
    # The body information that was sent from the client is stored in the variable
    # The client side is calling this route when they want to see if the username matches the stored password
    requestBodyInfo = loads(request.body)
    bodyUsername = requestBodyInfo["username"]
    bodyPassword = requestBodyInfo["password"]

    # Checking to see if the username is already contained in the usermodel
    allUsers = UserModel.objects.filter(username=bodyUsername)
    print(allUsers)

    if( len(allUsers)>0 ):
        # If password is equal to client side password, return the user's ID
        if allUsers[0].password == bodyPassword:
            return HttpResponse(allUsers[0].id)
        else:
            return HttpResponse(False)
    else:
        return HttpResponse(False)


# def get_userid(request, username):
#     userID = UserModel.objects.filter(username=username)
#     return HttpResponse(userID[0].id)


def get_user_models(request, userID):
    # It's getting all the promptagrams and filtering it by
    #       those that are made by the user that you sent.
    # Once we have all the filtered promptagram information the
    #       serializer is converting all that information into something readable
    allUserModels = PromptagramModel.objects.filter(foreignKeyUser=userID)
    serializer = PromptagramSerializer(allUserModels, many=True)
    # JsonResponse is a function that turns JSON to a string and sends it to the client
    return JsonResponse(serializer.data, safe=False)
