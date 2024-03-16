from flask import Flask, request, jsonify,url_for,redirect,session,render_template
from pymongo import MongoClient
from flask_jwt_extended import create_access_token ,jwt_required ,create_refresh_token ,JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS,cross_origin
from flask_dance.contrib.google import make_google_blueprint, google
import os 
from flask_session import Session
import identity
import identity.web
import requests
#from flask_dance.contrib.microsoft  import microsoft
#from flask_oauthlib.client import OAuth

#from werkzeug.urls import url_decode, url_encode
#from werkzeug.urls import url_quote as unquote
from datetime import datetime ,timedelta
from dotenv import  load_dotenv
from pathlib import Path
import json
#import urllib.parse import quote
import urllib
import msal

#rom urllib.parse import quote, url_decode, url_encode

app = Flask(__name__)
#CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
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

@app.route('/auth/signup', methods =['POST'])
def register():
    
    fname = request.json.get('fname')
    lname = request.json.get('lname')
    phoneNumber = request.json.get('phoneNumber')
    email = request.json.get('email')
    password = request.json.get('password')
    confirm = request.json.get('confirm')
    print(fname ,lname ,email,phoneNumber)
    # Check if required fields are provided
    if not (  fname and lname and phoneNumber and email and password and confirm):
        return jsonify({'message': 'Missing required fields'}), 400

    # Check if password matches confirmation password
    if password != confirm:
        return jsonify({'message': 'Password and confirm password do not match'}), 400

    # Check if user already exists
    if db.users.find_one({'email': email}):
        return jsonify({'message': 'User already exists'}), 400

    # Hash the password
    hashed_password = generate_password_hash(password)

    # Insert user into the database
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


#microsft login 
import app_config
from flask_session import Session
app.config.from_object(app_config)
from werkzeug.middleware.proxy_fix import ProxyFix
app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)
Session(app)

auth = identity.web.Auth(
    session=session,
    authority=app.config.get("AUTHORITY"),
    client_id= os.getenv('MICROSOFT_CLIENT_ID'),
    client_credential=os.getenv('MICROSOFT_CLIENT_SECRET'),
)

@app.route("/loginM")
def loginM():
    return render_template("login.html", version=identity.__version__, **auth.log_in(
        scopes=app_config.SCOPE, # Have user consent to scopes during log-in
        redirect_uri=url_for("auth_response", _external=True), # Optional. If present, this absolute URL must match your app's redirect_uri registered in Azure Portal
    ))

@app.route(app_config.REDIRECT_PATH)
def auth_response():
    result = auth.complete_log_in(request.args)
    if "error" in result:
        return render_template("auth_error.html", result=result)
    return redirect(url_for("indexM"))

@app.route("/logout")
def logout():
    return redirect(auth.log_out(url_for("index", _external=True)))

@app.route("/login/microsoft")
def indexM():
    if not (app.config["MICROSOFT_CLIENT_ID"] and app.config["MICROSOFT_CLIENT_SECRET"]):
        # This check is not strictly necessary.
        # You can remove this check from your production code.
        return render_template('config_error.html')
    if not auth.get_user():
        return redirect(url_for("loginM"))
    return render_template('index.html', user=auth.get_user(), version=identity.__version__)

@app.route("/call_downstream_api")
def call_downstream_api():
    token = auth.get_token_for_user(app_config.SCOPE)
    if "error" in token:
        return redirect(url_for("loginM"))
    # Use access token to call downstream api
    api_result = requests.get(
        app_config.ENDPOINT,
        headers={'Authorization': 'Bearer ' + token['access_token']},
        timeout=30,
    ).json()
    return render_template('display.html', result=api_result)


if __name__ == '__main__':
    app.run(debug=True)
