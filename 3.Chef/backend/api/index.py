from flask import Flask, request, jsonify,url_for,redirect,session,render_template
from pymongo import MongoClient
from flask_jwt_extended import create_access_token ,jwt_required ,create_refresh_token ,JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS,cross_origin
from flask_dance.contrib.google import make_google_blueprint, google
from msal import ConfidentialClientApplication
import os
from flask_session import Session
import identity
import identity.web
import requests
from datetime import datetime, timedelta
from dotenv import load_dotenv
from pathlib import Path
import json
import urllib
import msal

app = Flask(__name__)
CORS(app, origins="*", supports_credentials=True)

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
app.secret_key = os.urandom(12)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)
jwt = JWTManager(app)


client = MongoClient(os.getenv('MONGODB_URL'))
db = client['AI_PORTFOLIO']

# google login 
app.config["GOOGLE_OAUTH_CLIENT_ID"] = os.getenv('GOOGLE_OAUTH_CLIENT_ID')
app.config["GOOGLE_OAUTH_CLIENT_SECRET"] = os.getenv('GOOGLE_OAUTH_CLIENT_SECRET')

google_blueprint = make_google_blueprint(
    client_id=os.getenv('GOOGLE_OAUTH_CLIENT_ID'),
    client_secret=os.getenv('GOOGLE_OAUTH_CLIENT_SECRET'),
    scope=["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile", "openid"]
)
app.register_blueprint(google_blueprint, url_prefix="/login")

@app.route("/")
def index():
    if not google.authorized:
        return redirect(url_for("google.login"))
    return redirect(url_for("google_callback"))

@app.route("/callback")
def google_callback():
    if not google.authorized:
        return jsonify({"error": "Failed to log in."}),400
    resp = google.get("/oauth2/v1/userinfo")
    assert resp.ok, resp.text

    user_info = resp.json()
    exist_user = db.users.find_one({'email':user_info['email']},{'first_name':1})

    if not exist_user:
        db.users.insert_one({'first_name':user_info['given_name'] ,'last_name': user_info['family_name'],'email':user_info['email']})

    token = create_access_token(identity=user_info['email'])
    
    user_info['access_token'] = token
    
    user_info_str = urllib.parse.quote(json.dumps(user_info))
    
    return redirect(f"{os.getenv('FRONTEND_URL')}/login?data={user_info_str}", code=302)

# Microsoft Login
app.config["MICROSOFT_OAUTH_CLIENT_ID"] = os.getenv('MICROSOFT_OAUTH_CLIENT_ID')
app.config["MICROSOFT_OAUTH_CLIENT_SECRET"] = os.getenv('MICROSOFT_OAUTH_CLIENT_SECRET')
app.config["MICROSOFT_OAUTH_REDIRECT_URI"] = os.getenv('MICROSOFT_OAUTH_REDIRECT_URI')

@app.route("/login/microsoft")
def microsoft_login():
    msal_app = ConfidentialClientApplication(
        app.config["MICROSOFT_OAUTH_CLIENT_ID"],
        authority="https://login.microsoftonline.com/consumers",
        client_credential=app.config["MICROSOFT_OAUTH_CLIENT_SECRET"]
    )
    auth_url = msal_app.get_authorization_request_url(
        scopes=["User.Read"],
        state=os.urandom(16),
        redirect_uri=app.config["MICROSOFT_OAUTH_REDIRECT_URI"]
    )
    return redirect(auth_url)

from flask import redirect, jsonify, request, url_for
import urllib.parse

@app.route("/microsoft/callback")
def microsoft_callback():
    code = request.args.get('code')
    if not code:
        return jsonify({"error": "Failed to log in."}), 400

    msal_app = ConfidentialClientApplication(
        app.config["MICROSOFT_OAUTH_CLIENT_ID"],
        authority="https://login.microsoftonline.com/consumers",
        client_credential=app.config["MICROSOFT_OAUTH_CLIENT_SECRET"]
    )
    result = msal_app.acquire_token_by_authorization_code(
        code,
        scopes=["User.Read"],
        redirect_uri=app.config["MICROSOFT_OAUTH_REDIRECT_URI"]
    )

    if "error" in result:
        return jsonify({"error": "Failed to log in.", "details": result["error_description"]}), 400

    if "access_token" in result:
        headers = {'Authorization': 'Bearer ' + result['access_token']}
        graph_data = requests.get("https://graph.microsoft.com/v1.0/me", headers=headers).json()

        exist_user = db.users.find_one({'email': graph_data["mail"]}, {'first_name': 1})

        if not exist_user:
            user_data = {
                'first_name': graph_data.get("givenName", ""),
                'last_name': graph_data.get("surname", ""),
                'email': graph_data.get("mail", ""),
                'phone': graph_data.get("mobilePhone", "")
            }
            db.users.insert_one(user_data)
        else:
            db.users.update_one({'email': graph_data["mail"]}, {'$set': {'phone': graph_data.get("mobilePhone", "")}})

        user_info = {
            'first_name': graph_data.get("givenName", ""),
            'last_name': graph_data.get("surname", ""),
            'email': graph_data.get("mail", ""),
            'phone': graph_data.get("mobilePhone", "")
        }

        token = create_access_token(identity=user_info['email'])

        user_info['access_token'] = token

        user_info_str = urllib.parse.quote(json.dumps(user_info))

        frontend_url = os.getenv('FRONTEND_URL') + "/login?data=" + user_info_str
        return redirect(frontend_url, code=302)
    else:
        return jsonify({"error": "Failed to log in."}), 400

# Manual Authentication
@app.route('/auth/signup', methods =['POST'])
def register():
    
    fname = request.json.get('fname')
    lname = request.json.get('lname')
    phoneNumber = request.json.get('phoneNumber')
    email = request.json.get('email')
    password = request.json.get('password')
    confirm = request.json.get('confirm')
    print(fname ,lname ,email,phoneNumber)

    if not (  fname and lname and phoneNumber and email and password and confirm):
        return jsonify({'message': 'Missing required fields'}), 400
    if password != confirm:
        return jsonify({'message': 'Password and confirm password do not match'}), 400
    if db.users.find_one({'email': email}):
        return jsonify({'message': 'User already exists'}), 400

    hashed_password = generate_password_hash(password)

    db.users.insert_one({
        'first_name': fname,
        'last_name': lname,
        'phone_number': phoneNumber,
        'email': email,
        'password': hashed_password,
        'confirm_password': confirm
    })
    
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/auth/login', methods=['POST'])
def loginAuth():
    
    email = request.json['email']
    password = request.json['password']
   
    user = db.users.find_one({'email': email})
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'message': 'Invalid credentials'}), 401
    else:
        token  = create_access_token(identity= email)

    return jsonify({'message': 'Login successful' ,'token':token})

@app.route('/auth/forgetPassword',methods =['POST'])
def forgetP():

    email = request.json.get('email')
    newPassword = request.json.get('newPassword')

    db.users.update_one({ "email": email },{"$set": { "password": generate_password_hash(newPassword) }})
    return jsonify({'message':"password updates succesfully"})

@app.route('/logoutAPP', methods=['POST'])
def logoutAPP():
    # TODO: Implement logout logic
    # This route could be a placeholder if you're using token-based authentication.
    # If you're using sessions, you would typically handle logout on the client-side by clearing the session.

    return jsonify({'message': 'Logout successful'}), 200

if __name__ == '__main__':
    app.run(debug=True)
