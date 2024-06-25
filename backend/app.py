from flask import Flask, request, jsonify
from flask_cors import CORS
from db import query_db

app = Flask(__name__)
CORS(app)

@app.route('/users', methods=['GET'])
def get_users():
    result = query_db('SELECT * FROM users')
    return jsonify(result)

@app.route('/users', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    result = query_db(
        'INSERT INTO users (name, email) VALUES (%s, %s) RETURNING *',
        (name, email)
    )
    return jsonify(result[0] if isinstance(result, list) else {'error': result})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
