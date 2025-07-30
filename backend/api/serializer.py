from rest_framework import serializers
from .models import *

class AssessmentTypeSerializer(serializers.ModelSerializer):
    class Meta: 
        model = AssessmentType
        fields = ['name']