from .models import Players, MatchReport, TeamInfo
from rest_framework import viewsets, permissions
from .serializers import PlayersSerializer, MatchReportSerializer, TeamInfoSerializer

class PlayersViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PlayersSerializer

    def get_queryset(self):
        return self.request.user.players.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class MatchReportViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = MatchReportSerializer

    def get_queryset(self):
        return self.request.user.reports.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# class SquadInfoViewSet(viewsets.ModelViewSet):
#     queryset = SquadInfo.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = SquadInfoSerializer

# class PlayerInfoViewSet(viewsets.ModelViewSet):
#     queryset = PlayerInfo.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = PlayerInfoSerializer

class TeamInfoViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = TeamInfoSerializer

    def get_queryset(self):
        return self.request.user.teams.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

# class TeamPlayersViewSet(viewsets.ModelViewSet):
#     permission_classes = [
#         permissions.IsAuthenticated
#     ]
#     serializer_class = TeamPlayersSerializer
#
#     def get_queryset(self):
#         return self.request.user.teamplayers.all()
#
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)
