from rest_framework import routers
from .api import CaptainsViewSet, MatchReportViewSet, SquadInfoViewSet, PlayerInfoViewSet, TeamInfoViewSet, TeamPlayersViewSet

router = routers.DefaultRouter()
router.register('api/captains', CaptainsViewSet, 'captains')
router.register('api/reports', MatchReportViewSet, 'captains')
router.register('api/squads', SquadInfoViewSet, 'captains')
router.register('api/players', PlayerInfoViewSet, 'captains')
router.register('api/teams', TeamInfoViewSet, 'captains')
router.register('api/teamplayers', TeamPlayersViewSet, 'reports')

urlpatterns = router.urls
