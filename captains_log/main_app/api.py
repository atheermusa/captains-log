from .models import Players, MatchReport, SquadInfo, TeamInfo, TeamPlayers
from rest_framework import viewsets, permissions
from .serializers import PlayersSerializer, MatchReportSerializer, SquadInfoSerializer, TeamInfoSerializer, TeamPlayersSerializer

class PlayersViewSet(viewsets.ModelViewSet):
    # queryset = Players.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PlayersSerializer

    def get_queryset(self):
        return self.request.user.players.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

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

# class PlayerInfoViewSet(viewsets.ModelViewSet):
#     queryset = PlayerInfo.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = PlayerInfoSerializer

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
