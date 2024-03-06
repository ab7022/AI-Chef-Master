from flask import Flask,request,jsonify,redirect,session,url_for 

from pymongo import MongoClient

from flask_cors import CORS
import os
import json
from dotenv import load_dotenv
load_dotenv()

from datetime import datetime,timedelta

app = Flask(__name__)
CORS(app, origins=os.getenv('FRONTEND_URL'), supports_credentials=True)

client = MongoClient(os.getenv('MONGODB_URL'))
db = client['AI_database']

app.config['UPLOAD_FOLDER'] = 'files'

@app.route('/career' ,methods = ['POST'])
def carrer():
    if request.method =="POST":
        applied_for = request.form.get("appliedFor")
        personal = request.form.get("personal")
        experiences = request.form.get("experiences")
        education = request.form.get("education")
        skills = request.form.get('skills')
        socials_json = request.form.get('socials')
        socials = json.loads(socials_json) if socials_json else {}
        all_questions = request.form.get("allQuestions")
        voluntary_questions = request.form.get("voluntaryDisclosures")

        ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg', 'doc', 'docx'}
        certificates = request.files.getlist("certificates[]")
        certificate_paths = []
        saved_files = []

        for certificate in certificates:
            filename = certificate.filename
            timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
            new_filename = f"{timestamp}-{filename}"

            if '.' in new_filename and new_filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS:
                file_path = os.path.join(app.config['UPLOAD_FOLDER'], new_filename)
                certificate.save(file_path)
                certificate_paths.append(file_path)
                saved_files.append(file_path)
            else:
                for file in saved_files:
                    try:
                        os.remove(file)
                    except OSError as e:
                        print(f"Error: {file} : {e.strerror}")
                return jsonify({'message': 'Invalid file format'}), 400

        db.carrers.insert_one({
            'applied_for': applied_for,
            'personal': personal,
            'experience': experiences,
            'education': education,
            'skills': skills,
            'socials': socials,
            'all_questions': all_questions,
            'voluntary_questions': voluntary_questions,
            'certificates': certificate_paths
        })
        return jsonify({'message':'Application submitted successfully'}), 201

if __name__ =="__main__":
    app.run(debug= True)