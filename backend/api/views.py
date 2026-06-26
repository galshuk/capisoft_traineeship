from rest_framework import viewsets, status
from .models import Client, User, TodoItem, TodoList
from .serializers import ClientSerializer, UserSerializer, TodoListSerializer, TodoItemSerializer
from firebase_admin import auth
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .authentication import FirebaseAuthentication
from rest_framework.decorators import action

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  # what data the view operates on
    serializer_class = UserSerializer  # what serializer to use for JSON


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


@api_view(["POST"])
def register(request):
    email = request.data.get("email")
    password = request.data.get("password")
    name = request.data.get("name")


    # create in firebase
    firebase_user = auth.create_user(email = email, password = password)

    # create in local DB
    user = User.objects.create(
        firebase_uid = firebase_user.uid,
        email = email,
        name = name,
    )

    return Response({"id": str(user.id), "email": user.email})


@api_view(["PATCH"])
def define_admin(request):
    email = request.data.get("email")

    try:
        user = User.objects.get(email = email) # email label &  val
    except User.DoesNotExist:
        return Response(
            {"error": "User not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    user.role = User.Role.ADMIN
    user.save()

    return Response({"id": str(user.id), "email": user.email, "role": user.role})

class TodoListViewSet(viewsets.ModelViewSet):
    authentication_classes = [FirebaseAuthentication]

    serializer_class = TodoListSerializer

    def get_queryset(self): # returns different sets based on the user
        user = self.request.user
        if user.role == User.Role.ADMIN:
            return TodoList.objects.all() # If admin return all items
        return TodoList.objects.filter(owner=user) # else return only that user's

    def perform_create(self, serializer): # Sets the creater as the owner automatically
        serializer.save(owner=self.request.user)

    # --- View owned lists ----
    @action(detail=True, methods=["post"])
    def assign(self, request, pk=None):
        todo_list = self.get_object()                 # the list being assigned

        # only the owner can assign
        if todo_list.owner != request.user:
            return Response(
                {"error": "Only the owner can assign this list"},
                status=status.HTTP_403_FORBIDDEN,
            )

        # who to assign it to (passed in the request)
        target_user_id = request.data.get("user_id")
        try:
            target_user = User.objects.get(id=target_user_id)
        except User.DoesNotExist:
            return Response(
                {"error": "Target user not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        todo_list.assignee = target_user
        todo_list.save()

        return Response({
            "id": str(todo_list.id),
            "title": todo_list.title,
            "assignee": str(target_user.id),
            "assignee_email": str(target_user.email),
        })


    # --- View asigned lists ----
    @action(detail=False, methods=["get"])
    def assigned(self, request):
        lists = TodoList.objects.filter(assignee=request.user)
        serializer = self.get_serializer(lists, many=True)
        return Response(serializer.data)

class TodoItemViewSet(viewsets.ModelViewSet):
    authentication_classes = [FirebaseAuthentication]

    serializer_class = TodoItemSerializer

    def get_queryset(self):
        user = self.request.user
        if user.role == User.Role.ADMIN:
            return TodoItem.objects.all()
        return TodoItem.objects.filter(parent_list__owner=user)

    # Assign a task
    @action(detail=True, methods=["post"])
    def assign(self, request, pk=None):
        item = self.get_object()

        # only the owner of the item's parent list can assign
        if item.parent_list.owner != request.user:
            return Response(
                {"error": "Only the owner can assign this item"},
                status=status.HTTP_403_FORBIDDEN,
            )

        target_user_id = request.data.get("user_id")
        try:
            target_user = User.objects.get(id=target_user_id)
        except User.DoesNotExist:
            return Response(
                {"error": "Target user not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        item.assignee = target_user
        item.save()

        return Response({
            "id": str(item.id),
            "title": item.title,
            "assignee": str(target_user.id),
            "assignee_email": str(target_user.email),
        })

    # ----- Get assigned tasks -----
    @action(detail=False, methods=["get"])
    def assigned(self, request):
        items = TodoItem.objects.filter(assignee=request.user)
        serializer = self.get_serializer(items, many=True)
        return Response(serializer.data)

    # ----- Chang task status -----
    @action(detail=True, methods=["patch"])
    def toggle_done(self, request, pk=None):
        item = self.get_object()
        item.is_done = not item.is_done    # flip it
        item.save()
        return Response({
            "id": str(item.id),
            "title": item.title,
            "is_done": item.is_done,
        })
