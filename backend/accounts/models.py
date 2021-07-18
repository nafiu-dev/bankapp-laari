from django.db import models
from django.contrib.auth.models import AbstractUser
import random
# Create your models here.
    # print(random.randint(123123123123,947258369125))

class User(AbstractUser):
    account_number = models.IntegerField(default=random.randint(123123123123,947258369125), blank=True)
    balance = models.IntegerField(default=1200, blank=True)
 