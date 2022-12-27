from django.urls import path

from . import views


urlpatterns = [

    path('api/', views.DecisionView, name='DecisionView'),    
    path('create/', views.CreateNewDecision, name='CreateNewDecision'),
    path("", views.index, name="index"),
    path("login", views.login, name="login"),
    path("logout", views.logout, name="logout"),
    path("callback", views.callback, name="callback"),
]