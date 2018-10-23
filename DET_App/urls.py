from django.urls import path
from . import views

urlpatterns = [
    path('api/Recipe/', views.RecipeListCreate.as_view() ),
]