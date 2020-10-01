from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Players(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=70)
    owner = models.ForeignKey(User, related_name="players", on_delete=models.CASCADE, null=True)
    player_notes = models.CharField(max_length=1000, null=True)

class TeamInfo(models.Model):
    owner = models.ForeignKey(User, related_name="teams", on_delete=models.CASCADE, null=True)
    team_name = models.CharField(max_length=50, null=True)
    formation = models.CharField(max_length=20)
    position1 = models.CharField(max_length=20, null=True)
    position2 = models.CharField(max_length=20, null=True)
    position3 = models.CharField(max_length=20, null=True)
    position4 = models.CharField(max_length=20, null=True)
    position5 = models.CharField(max_length=20, null=True)
    position6 = models.CharField(max_length=20, null=True)
    position7 = models.CharField(max_length=20, null=True)
    position8 = models.CharField(max_length=20, null=True)
    position9 = models.CharField(max_length=20, null=True)
    position10 = models.CharField(max_length=20, null=True)
    position11 = models.CharField(max_length=20, null=True)

class TeamPlayers(models.Model):
    owner = models.ForeignKey(User, related_name="teamplayers", on_delete=models.CASCADE, null=True)
    team_id = models.ForeignKey(TeamInfo, on_delete=models.CASCADE, null=True)
    player_id = models.ForeignKey(Players, on_delete=models.CASCADE, null=True)
    position = models.CharField(max_length=10)

class MatchReport(models.Model):
    owner = models.ForeignKey(User, related_name="reports", on_delete=models.CASCADE, null=True)
    date = models.DateField()
    opposition = models.CharField(max_length=40)
    message = models.CharField(max_length=1000)
    final_score = models.CharField(max_length=5)
    result = models.CharField(max_length=4)
    team_id = models.ForeignKey(TeamInfo, on_delete=models.CASCADE, null=True)
