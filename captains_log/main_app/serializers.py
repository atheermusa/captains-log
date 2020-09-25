from rest_framework import serializers
from .models import Captains

class CaptainsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Captains
        fields = '__all__'