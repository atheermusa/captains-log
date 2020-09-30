from rest_framework import serializers
from .models import Players, MatchReport, TeamInfo, TeamPlayers

class PlayersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = '__all__'

class MatchReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchReport
        fields = '__all__'

# class SquadInfoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SquadInfo
#         fields = '__all__'

# class PlayerInfoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PlayerInfo
#         fields = '__all__'

class TeamInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamInfo
        fields = '__all__'

class TeamPlayersSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamPlayers
        fields = '__all__'
