import uuid
from django.db import models

# # Create your models here.
# class Member(models.Model):
#   firstname = models.CharField(max_length=255)
#   lastname = models.CharField(max_length=255)


class Client(models.Model):
    class Status(models.TextChoices):
        NO_STATUS = "no_status", "No status"  # whats stored in the DB | readable label
        IN_NEGOTIATION = "in_negotiation", "In Negotiation"
        CLOSED_WON = "closed_won", "Closed - Won"
        CLOSED_LOST = "closed_lost", "Closed - Lost"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)  # primary_key - makes this the table's unique id
    email = models.EmailField(unique=True) # so we dont have multiples
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)  # null - db level | blank - validation layer
    project_name = models.CharField(max_length=255)
    project_revenue = models.DecimalField(max_digits=12, decimal_places=2)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.NO_STATUS)
    invited_by = models.ForeignKey(  # links to the user that invited the client
        "User",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="invited_clients"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email


class User(models.Model):
    class Role(models.TextChoices):
        ADMIN = "admin", "Admin"
        USER = "user", "User"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)
    firebase_uid = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    role = models.CharField(max_length=10, choices=Role.choices, default=Role.USER) # fill in enum fields
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
