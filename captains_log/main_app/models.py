from django.db import models

# Create your models here.
class Captains(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=70)

class MatchReport(models.Model):
    captain_id = models.ForeignKey(Captains, on_delete=models.CASCADE, null=True)#Should be able to take out these null=true but might need to delete migratitons and db.sqlite
    date = models.DateField()
    opposition = models.CharField(max_length=40)
    message = models.CharField(max_length=1000)
    final_score = models.CharField(max_length=5)
    result = models.CharField(max_length=4)
