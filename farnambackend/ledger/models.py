from django.db import models

# Create your models here.

class Decision(models.Model):
    index = models.IntegerField()
    date = models.DateField()
    time = models.TimeField()
    state = models.CharField(max_length=200)
    context = models.CharField(max_length=200)
    problem_statement = models.DecimalField(max_digits=10, decimal_places=2)
    variables = models.CharField(max_length=200)
    complications = models.CharField(max_length=200)
    range_of_outcomes = models.CharField(max_length=200)
    expectations = models.CharField(max_length=200)
    probability = models.CharField(max_length=200)
    outcome =  models.CharField(max_length=200)
    review_date = models.DateField()

    def __str__(self):
        return self.context
