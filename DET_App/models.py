from django.db import models
from django.contrib.auth.models import User

from uuid import uuid4

# Create your models here.


class User(models.Model):
    UserID = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    UserEmail = models.CharField(max_length=256, unique=True, blank=False)
    Username   = models.CharField(max_length=50, blank=False)
    UserFirstName = models.CharField(max_length=50, blank=True)
    UserLastName = models.CharField(max_length=50, blank=True)
    UserPW = models.CharField(max_length=256, blank=False)
    CustomerID = models.CharField(max_length=256, blank=True)
    Subscription = models.CharField(max_length=256, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'User'
        verbose_name_plural = 'user'


class Recipe(models.Model):
    RecipeID = models.UUIDField(
        primary_key=True, default=uuid4, editable=False)
    CookTime = models.DurationField()
    CookingMethod = models.CharField(max_length=50)
    Nutrition = models.CharField(max_length=100)
    RecipeTitle = models.CharField(max_length=50, blank=True)
    RecipeCategory = models.CharField(max_length=50)
    RecipeCuisine = models.CharField(max_length=50)
    RecipeIngredients = models.ForeignKey(
        'Ingredients', on_delete=models.CASCADE)
    RecipeInstructions = models.TextField()
    RecipeYield = models.IntegerField()
    SuitableForDiet = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'Recipe'
        verbose_name_plural = 'recipes'


class Ingredients(models.Model):
    ndbno = models.IntegerField()
    name = models.CharField(max_length=100)
    measure = models.CharField(max_length=100)
    nutrients = models.CharField(max_length=100)
    nutrient_id = models.CharField(max_length=100)
    unit = models.CharField(max_length=100)
    gm = models.IntegerField()
    value = models.IntegerField()
    
    
    class Meta:
        db_table = 'Ingredients'
        verbose_name_plural = 'ingredients'

# editable when we discuss how the user accounts will look. For now it gives recipe's for each user
