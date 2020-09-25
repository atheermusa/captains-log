from django.db import models

# Create your models here.
class Captains(models.Model):
    # captain_id = models.PositiveIntegerField(primary_key=True)
    # captain_fname = models.CharField(max_length=50)
    # captain_lname = models.CharField(max_length=50)
    # email = models.CharField(max_length=70)

    id = models.PositiveIntegerField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=70)