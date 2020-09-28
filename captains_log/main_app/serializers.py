from rest_framework import serializers
from .models import Captains, MatchReport

class CaptainsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Captains
        fields = '__all__'

class MatchReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchReport
        fields = '__all__'
