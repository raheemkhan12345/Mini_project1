from django.shortcuts import render
from .models import Question

def quiz_view(request):
    questions = Question.objects.all()
    return render(request,"index.html",{"questions" : questions})