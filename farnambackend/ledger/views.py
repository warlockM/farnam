from django.shortcuts import render
from rest_framework.response import Response
from .serializers import *
from . models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
# 📁 webappexample/views.py -----

import json
from authlib.integrations.django_client import OAuth
from django.conf import settings
from django.shortcuts import redirect, render, redirect
from django.urls import reverse
from urllib.parse import quote_plus, urlencode

oauth = OAuth()

oauth.register(
    "auth0",
    client_id=settings.AUTH0_CLIENT_ID,
    client_secret=settings.AUTH0_CLIENT_SECRET,
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f"https://{settings.AUTH0_DOMAIN}/.well-known/openid-configuration",
)
# Create your views here.

def login(request):
    return oauth.auth0.authorize_redirect(
        request, request.build_absolute_uri(reverse("callback"))
    )

# 👆 We're continuing from the steps above. Append this to your webappexample/views.py file.

def callback(request):
    token = oauth.auth0.authorize_access_token(request)
    request.session["user"] = token
    return redirect("http://localhost:3000/")

# 👆 We're continuing from the steps above. Append this to your webappexample/views.py file.

def logout(request):
    request.session.clear()

    return redirect(
        f"https://{settings.AUTH0_DOMAIN}/v2/logout?"
        + urlencode(
            {
                "returnTo": "http://localhost:3000",
                "client_id": settings.AUTH0_CLIENT_ID,
            },
            quote_via=quote_plus,
        ),
    )

# 👆 We're continuing from the steps above. Append this to your webappexample/views.py file.

def index(request):
    return render(
        request,
        "index.html",
        context={
            "session": request.session.get("user"),
            "pretty": json.dumps(request.session.get("user"), indent=4),
        },
    )

@api_view(['GET'])
def DecisionView(request): 
    queryset = Decision.objects.all()
    serializer = DecisionSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def CreateNewDecision(request):
    serializer = DecisionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)