from django.shortcuts import render
from rest_framework.response import Response
from .serializers import *
from . models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
def index(request):
    return HttpResponse("Hello, world.")

@api_view(['GET'])
def DecisionView(request): 
    queryset = Decision.objects.all()
    serializer = DecisionSerializer(queryset, many=True)
    print(serializer.data)
    return Response(serializer.data)