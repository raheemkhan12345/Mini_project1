from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length = 250)
    option1 = models.CharField(max_length = 150)
    option2 = models.CharField(max_length = 150)
    option3 = models.CharField(max_length = 150)
    option4 = models.CharField(max_length = 150)
    correct_option = models.CharField(max_length = 150)
    
    def __str__(self):
        return self.question_text
    
