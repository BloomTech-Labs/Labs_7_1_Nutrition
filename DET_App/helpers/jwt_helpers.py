import jwt
import time

from decouple import config

# Some variables we'll re-use:
key = config('SECRET_KEY')
algorithm = 'HS256'

# Some mutations create new JWT's, so let's have one function to create them:
def create_jwt(user_id, user_name, user_email):
  payload = {
    'sub': {
        'id': user_id,
        'username': user_name,
        'email': user_email
    },
    'iat': time.time(),
    'exp': time.time() + 2592000 # 30 day expiration time
  }

  new_jwt = jwt.encode(payload, key, algorithm=algorithm)
  return new_jwt.decode('utf-8')

# Some queries and mutations need to verify a JWT is valid:
def decode_jwt(jwt_arg):
  encoded = jwt_arg.encode('utf-8')
  return jwt.decode(encoded, key, algorithms=[ algorithm ])