from flask import Flask, request, jsonify,url_for,redirect,session,render_template
import os
from flask_cors import CORS,cross_origin
from pymongo import MongoClient


app = Flask(__name__)
CORS(app, origins="*", supports_credentials=True)

client = MongoClient(os.getenv('MONGODB_URL'))
db = client['AI_CI']

@app.route('/process', methods =['POST'])
def process():
    return jsonify({'message': ''}), 201

if __name__ == '__main__':
    app.run(debug=True)