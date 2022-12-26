from rest_framework import serializers
from .models import *

class DecisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Decision
        fields = '__all__'