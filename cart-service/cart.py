import os
import redis
import json

REDIS_HOST = os.getenv('REDIS_HOST', 'redis')
REDIS_PORT = int(os.getenv('REDIS_PORT', 6379))
r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=0, decode_responses=True)

def get_cart(user_id):
    data = r.get(user_id)
    return json.loads(data) if data else {}

def save_cart(user_id, cart):
    r.set(user_id, json.dumps(cart))

def clear_cart(user_id):
    r.delete(user_id)
