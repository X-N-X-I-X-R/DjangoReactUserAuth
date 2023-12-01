from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from .views import UserRegistrationView


# from .views import MyTokenObtainPairView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', UserRegistrationView.as_view(), name='register'),


 # add path for register
  
]
