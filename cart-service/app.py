from flask import Flask, request, jsonify
from cart import get_cart, save_cart, clear_cart

app = Flask(__name__)

@app.route('/cart/<user_id>', methods=['GET'])
def read_cart(user_id):
    return jsonify(get_cart(user_id))

@app.route('/cart/<user_id>/items', methods=['POST'])
def add_item(user_id):
    payload = request.get_json()
    item_id = payload.get('id')
    qty = payload.get('quantity', 1)
    cart = get_cart(user_id)
    cart[item_id] = cart.get(item_id, 0) + qty
    save_cart(user_id, cart)
    return jsonify(cart), 201

@app.route('/cart/<user_id>/items/<item_id>', methods=['DELETE'])
def remove_item(user_id, item_id):
    cart = get_cart(user_id)
    if item_id in cart:
        cart.pop(item_id)
        save_cart(user_id, cart)
        return jsonify(cart)
    return jsonify({'error': 'not found'}), 404

@app.route('/cart/<user_id>', methods=['DELETE'])
def empty_cart(user_id):
    clear_cart(user_id)
    return '', 204

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
