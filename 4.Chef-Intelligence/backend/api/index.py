from flask import Flask, request, jsonify,url_for,redirect,session,render_template
import os
from flask_cors import CORS,cross_origin
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, origins="*", supports_credentials=True)

client = MongoClient(os.getenv('MONGODB_URL'))
db = client['AI_CI']

@app.route('/start-process', methods =['POST'])
def process():
    data = request.get_json()
    document = {'rows': data}
    result = db.Process.insert_one(document)
    return jsonify({'message': 'Data inserted successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)