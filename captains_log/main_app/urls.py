from rest_framework import routers
from .api import PlayersViewSet, MatchReportViewSet, TeamInfoViewSet

router = routers.DefaultRouter()
router.register('api/players', PlayersViewSet, 'players')
router.register('api/reports', MatchReportViewSet, 'players')
# router.register('api/squads', SquadInfoViewSet, 'players')
# router.register('api/players', PlayerInfoViewSet, 'players')
router.register('api/teams', TeamInfoViewSet, 'players')
# router.register('api/teamplayers', TeamPlayersViewSet, 'reports')

urlpatterns = router.urls
