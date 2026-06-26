from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ClientViewSet, UserViewSet, register, define_admin, TodoListViewSet, TodoItemViewSet

router = DefaultRouter()
router.register(r"clients", ClientViewSet)   # registers ClientViewSet under path "clients"
router.register(r"users", UserViewSet)
router.register(r"todolists", TodoListViewSet, basename="todolist")
router.register(r"todoitems", TodoItemViewSet, basename="todoitem")

urlpatterns = [
    path("register/", register),
    path("define-admin/", define_admin),
    *router.urls,
]
