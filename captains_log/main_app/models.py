from django.db import models

# Create your models here.
class Captains(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=70)

# class MatchReport(models.Model):
#     id = model.ForeignKey(Captains, on_delete=models.SET_NULL, null=True)
#     date = models.date()
#     opposition = models.CharField(max_length=40)
#     message = models.CharField(max_length=1000)
#     final_score = models.CharField(max_length=5)
#     result = models.CharField(max_length=4)
