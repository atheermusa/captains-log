from .models import Captains, MatchReport, SquadInfo, PlayerInfo, TeamInfo, TeamPlayers
from rest_framework import viewsets, permissions
from .serializers import CaptainsSerializer, MatchReportSerializer, SquadInfoSerializer, PlayerInfoSerializer, TeamInfoSerializer, TeamPlayersSerializer

class CaptainsViewSet(viewsets.ModelViewSet):
    queryset = Captains.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CaptainsSerializer

class MatchReportViewSet(viewsets.ModelViewSet):
    queryset = MatchReport.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MatchReportSerializer

class SquadInfoViewSet(viewsets.ModelViewSet):
    queryset = SquadInfo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SquadInfoSerializer

class PlayerInfoViewSet(viewsets.ModelViewSet):
    queryset = PlayerInfo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PlayerInfoSerializer

class TeamInfoViewSet(viewsets.ModelViewSet):
    queryset = TeamInfo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TeamInfoSerializer

class TeamPlayersViewSet(viewsets.ModelViewSet):
    queryset = TeamPlayers.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TeamPlayersSerializer
