from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Players(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=70)
    owner = models.ForeignKey(User, related_name="players", on_delete=models.CASCADE, null=True)
    player_notes = models.CharField(max_length=1000, null=True)

class MatchReport(models.Model):
    captain_id = models.ForeignKey(Players, on_delete=models.CASCADE, null=True)
    date = models.DateField()
    opposition = models.CharField(max_length=40)
    message = models.CharField(max_length=1000)
    final_score = models.CharField(max_length=5)
    result = models.CharField(max_length=4)

class SquadInfo(models.Model):
    captain_id = models.ForeignKey(Players, on_delete=models.CASCADE, null=True)
    squad_name = models.CharField(max_length=50)
    shirt_design = models.IntegerField(null=True)
    shirt_colors = models.CharField(max_length=13, null=True)
    # photo = models.ImageField()? THINK THIS IS A BIT COMPLICATED, THERE ARE A FEW MORE STEPS, AND I DON'T THINK IT SAVES TO THE DATABASE. IF WE WANT TO DO THIS WE NEED TO LOOK UP THE BEST WAY TO SAVE FILES TO A DATABSE AS IT WILL SERIOUSLY SLOW DOWN OUR APP

# class PlayerInfo(models.Model):
#     squad_id = models.ForeignKey(SquadInfo, on_delete=models.CASCADE, null=True)
#     firstname = models.CharField(max_length=50)
#     lastname = models.CharField(max_length=50)
#     email = models.CharField(max_length=70)
#     player_notes = models.CharField(max_length=1000)
    # photo = models.ImageField()? THINK THIS IS A BIT COMPLICATED, THERE ARE A FEW MORE STEPS, AND I DON'T THINK IT SAVES TO THE DATABASE. IF WE WANT TO DO THIS WE NEED TO LOOK UP THE BEST WAY TO SAVE FILES TO A DATABSE AS IT WILL SERIOUSLY SLOW DOWN OUR APP

class TeamInfo(models.Model):
    squad_id = models.ForeignKey(SquadInfo, on_delete=models.CASCADE, null=True)
    team_name = models.CharField(max_length=50)
    formation = models.CharField(max_length=5)

class TeamPlayers(models.Model):
    team_id = models.ForeignKey(TeamInfo, on_delete=models.CASCADE, null=True)
    player_id = models.ForeignKey(Players, on_delete=models.CASCADE, null=True) 
    position = models.CharField(max_length=5)
