from flask import Flask,request,jsonify,redirect ,session ,url_for 
from flask_jwt_extended import JWTManager,jwt_required,create_access_token ,get_jwt_identity,get_current_user
from pymongo import MongoClient
from flask_dance.contrib.google import make_google_blueprint, google
from gridfs import GridFS
from flask_cors import CORS,cross_origin
import os
import json
import requests
import re
import urllib.parse
import bson
from dotenv import  load_dotenv
load_dotenv()
from pathlib import Path
from datetime import datetime,timedelta
from bson.regex import Regex
import re

app  = Flask(__name__)
CORS(app, origins=os.getenv('FRONTEND_URL'), supports_credentials=True)

app.secret_key = os.urandom(12)

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=30)
jwt = JWTManager(app)

client = MongoClient(os.getenv('MONGODB_URL'))
db = client['AI_database']

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
    exist_user = db.AllUser.find_one({'email':user_info['email']},{'first_name':1})

    if not exist_user:
        db.AllUser.insert_one({'first_name':user_info['given_name'] ,'last_name': user_info['family_name'],'email':user_info['email']})

    token = create_access_token(identity=user_info['email'])
    
    user_info['access_token'] = token
    
    user_info_str = urllib.parse.quote(json.dumps(user_info))
    
    return redirect(f"{os.getenv('FRONTEND_URL')}/login?data={user_info_str}", code=302)

@app.route('/chef/signup' ,methods =['POST'])
def sign_up():

    if request.method  == 'POST':
        data = request.get_json()

        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        password = data.get('password')
        password_repeat= data.get('password_repeat')
        
        exist_user  =db.AllUser.find_one({'email':email},{'first_name':1})

        if exist_user:
            return jsonify({"message":"User Already registered"}),409
        if password != password_repeat:
            return jsonify({'message':'Password not match'})
        db.AllUser.insert_one({'first_name':first_name ,'last_name':last_name,'email':email,'password':password})
        
        return jsonify({'message':'SignUp Successful'}),201
  
@app.route('/chef/login' ,methods =['POST'])
def login():
    if request.method =='POST':
        data=request.get_json()

        email = data.get('email')
        password  = data.get('password')
        session['email'] = email
        
        login_user = db.AllUser.find_one({'email':email ,'password':password})
        if login_user:
            access_token = create_access_token(identity= email)
           
            login_user = db.AllUser.find_one({'email':email},{'first_name':1 ,'last_name':1})

            kname = login_user['first_name']+" "+login_user['last_name']
            session['is_login'] = True
            return jsonify(message = 'Login Successful',access_token = access_token ,email = email ,name = kname)
        else:
            return  jsonify({'message':'Invalid email and password'}),401

@app.route('/chef/createDish', methods=['POST'])
@jwt_required()
def create_dish():
    user_info = get_jwt_identity()
    login_user = db.AllUser.find_one({'email': user_info}, {'first_name': 1, 'last_name': 1})
    kname = login_user['first_name'] + " " + login_user['last_name']

    temp = request.get_json()
    instructions = temp['instructions']
    dish_name = temp['name']
    veg_non_veg = temp['veg_non_veg']
    description = temp['description']
    pop_state = temp['popularity_state']
    cuisine = temp['cuisine']
    cooking_time = temp['cooking_time']
    kitchen_equip = temp['kitchen_equipments']
    course = temp['courses']
    ingredients = temp['ingredients']

    dish_name_lower = dish_name.lower()

    similar_dishes = db.Dish.find({
        # 'created_by': kname,
        'dish_name': Regex('^' + re.escape(dish_name_lower) + '$', 'i')
    })

    for dish in similar_dishes:
        existing_ingredients = dish['ingredients']
        existing_ingredients_lower = [(ing['name'].lower(), ing['quantity'], ing['unit']) for ing in existing_ingredients]
        new_ingredients_lower = [(ing['name'].lower(), ing['quantity'], ing['unit']) for ing in ingredients]

        if set(existing_ingredients_lower) == set(new_ingredients_lower):
            return jsonify({'error': 'Dish already exists with the same name and ingredients'}), 400
            # return jsonify({'error': 'You have already created a dish with the same name and ingredients'}), 400

    formatted_time = datetime.now().strftime("%H:%M:%S")
    formatted_date = datetime.now().strftime("%Y-%m-%d")

    db.Dish.insert_one({
        "created_by": kname,
        "ingredients": ingredients,
        "instructions": instructions,
        "description": description,
        "dish_name": dish_name,
        "veg_non_veg": veg_non_veg,
        "popularity_state": pop_state,
        "Cuisine": cuisine,
        "cooking_time": cooking_time,
        "kitchen_equipments": kitchen_equip,
        "courses": course,
        "Created_date": formatted_date,
        "Created_time": formatted_time,
        "email": user_info
    })

    return jsonify({'message': 'Dish Saved Successfully'}), 201
    
@app.route('/myAccount',methods = ['GET'])
@jwt_required()
def myAccount():
    user_info = get_jwt_identity()   
    login_user = db.AllUser.find_one({'email':user_info},{'first_name':1 ,'last_name':1})
    name = login_user['first_name']+" " +login_user['last_name']
    
    All_dis = db.Dish.find({'email':user_info})
    output3  =[]
    for dish in All_dis:
        dish_data = {
                "id":str(dish['_id']),
                "name" :dish['dish_name'],
                "cuisine":dish['Cuisine'],
                "veg_non":dish['veg_non_veg'],
                "course_type":dish['courses'],
                "created_date":dish['Created_date'],
                "created_time":dish['Created_time'],
                "description":dish['description'],
                "cooking_time":dish["cooking_time"], 
                "popularity_state":dish["popularity_state"]
        }
        output3.append(dish_data)

    return jsonify(output3)

@app.route('/api/search', methods=['GET', 'POST'])
def search():
    query = request.get_json()
    sea = query
    final = sea["query"].lower()
    All_dishes = db.Dish.find({"dish_name": {"$regex": final, "$options": "i"}})
    output = []
    found_dishes = set()
    for dish in All_dishes:
        ingredients = dish['ingredients']
        ingredients_lower = [ing['name'].lower() for ing in ingredients]
        if (dish['dish_name'], tuple(ingredients_lower)) not in found_dishes:
            dish1 = {
                "name": dish['dish_name'],
                "cuisine": dish['Cuisine'],
                "veg_non_veg": dish['veg_non_veg'],
                "courses": dish['courses'],
                "created_date": dish['Created_date'],
                "created_time": dish['Created_time'],
                "created_by": dish['created_by'],
                "description": dish['description'],
                "cooking_time": dish["cooking_time"],
                "kitchen_equipments": dish["kitchen_equipments"],
                "popularity_state": dish["popularity_state"],
                "ingredients":dish['ingredients'],
                "instructions":dish['instructions'],
            }
            output.append(dish1)
            found_dishes.add((dish['dish_name'], tuple(ingredients_lower)))
    return jsonify(output)

@app.route('/api/dish/<id>',methods =['GET'])
@jwt_required()
def  filter_by_id(id):
    dish = db.Dish.find_one({'_id':bson.ObjectId(oid=id)})
    
    dish_data = {
            "name" :dish['dish_name'],
            "cuisine":dish['Cuisine'],
            "veg_non_veg":dish['veg_non_veg'],
            "courses":dish['courses'],
            "created_date":dish['Created_date'],
            "created_time":dish['Created_time'],
            "description":dish['description'],
            "cooking_time":dish["cooking_time"],
            "ingredients":dish['ingredients'],
            "instructions":dish['instructions'],
            "kitchen_equipments":dish["kitchen_equipments"],
            "popularity_state":dish["popularity_state"]     
    }
    return dish_data

@app.route('/show')
@jwt_required()
def show():
    user_info  = get_jwt_identity()
    login_user = db.AllUser.find_one({'email':user_info},{'first_name':1 ,'last_name':1})
    name = login_user['first_name']  +" " + login_user['last_name']
    return jsonify({'name':name ,'email':user_info})
    
@app.route('/api/contact',methods =['POST'])
def contact():
    data = request.get_json()
    name = data['name']
    message =data['message']
    
    db.Contact.insert_one({'name':name,'message':message})

    return jsonify({"message":"Message submitted succesfully"}),200

if __name__ == '__main__':
    app.debug = True
    app.run()