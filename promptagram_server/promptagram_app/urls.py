from django.urls import include, path
from rest_framework import routers
from . import views
from . import api

router = routers.DefaultRouter()
router.register('users', api.UserViewSet)
router.register('promptagram', api.PromptagramViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('', include(router.urls)),
    path('auth_users/', views.auth_users, name='auth_users'),
    path('get_user_models/<str:userID>/', views.get_user_models, name='get_user_models'),
    path('get_userid/<str:username>/', views.get_userid, name='get_userid'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
