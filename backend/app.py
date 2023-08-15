
import sqlite3;
from flask import Flask
from flask_cors import CORS
from threading import Lock
from firebase_admin import credentials, auth
import firebase_admin


cred = credentials.Certificate('./backend/account_key/dj-site-28442-firebase-adminsdk-7z5gy-86a87954a0.json')
firebase_admin.initialize_app(cred)

lock = Lock()

application = Flask(__name__)
CORS(application, support_credentials=True) # Разрешаем предоставлять данные клиентской части приложения

con = sqlite3.connect("backend/metanit.db", check_same_thread=False) # Присоединяемся к базе данных
cursor = con.cursor()

def checkToken(token):
    page = auth.list_users()
    while page:
      for user in page.users:
          if (user.uid == auth.verify_id_token(token)['uid']):
              return True
      page = page.get_next_page()

    return False
    