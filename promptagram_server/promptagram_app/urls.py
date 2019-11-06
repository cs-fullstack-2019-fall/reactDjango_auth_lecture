from django.urls import include, path
from rest_framework import routers
from . import views
from . import api

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

# Two different routes. One is the user route and the other is the promptagram route
# You're declaring a variable for default router function
routers = routers.DefaultRouter()
# Users are creating URLs for edit/delete/add/read (GET, POST, PUT, DELETE)
routers.register('users', api.UserViewSet)
routers.register('promptagram', api.PromptagramViewSet)

urlpatterns = [
    path('', include(routers.urls)),
    path('auth_users/', views.auth_users, name='auth_users'),
    path('get_user_models/<str:userID>/', views.get_user_models, name='get_user_models'),
    # path('get_userid/<str:username>/', views.get_userid, name='get_userid'),
]
