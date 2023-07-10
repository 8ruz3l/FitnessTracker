from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    # You can include additional fields like email, name, etc. in the request data

    if username and password:
        try:
            user = User.objects.create_user(username=username, password=password)
            # Optionally, you can set additional fields on the user object
            # user.email = request.data.get('email')
            # user.first_name = request.data.get('first_name')
            # user.last_name = request.data.get('last_name')
            # user.save()

            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)
