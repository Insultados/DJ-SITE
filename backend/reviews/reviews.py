import sqlite3;
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from threading import Lock
from firebase_admin import auth, credentials
import firebase_admin

cred = credentials.Certificate('./backend/account_key/dj-site-28442-firebase-adminsdk-7z5gy-86a87954a0.json')
firebase_admin.initialize_app(cred)

lock = Lock()

application = Flask(__name__)
CORS(application, support_credentials=True) # Разрешаем предоставлять данные клиентской части приложения


con = sqlite3.connect("backend/metanit.db", check_same_thread=False) # Присоединяемся к базе данных
cursor = con.cursor() # Курсор к базе данных (объект доступа к данным)
 
try: # Создаем таблицу в базе данных, если ее не существует
    cursor.execute("""CREATE TABLE reviews
                (
                name TEXT,
                product_name TEXT,
                review TEXT
                )
            """)
except: 
    pass


def checkToken(token):
    page = auth.list_users()
    while page:
      for user in page.users:
          if (user.uid == auth.verify_id_token(token)['uid']):
              return True
      page = page.get_next_page()

    return False
    


# GET запрос на сервер к получению данных с базы
@ application.route('/reviews/', methods=['GET', 'OPTIONS'])
@ cross_origin(supports_credentials=True)
def getAllReviews():
    lock.acquire(True)
    cursor.execute("SELECT * FROM reviews") # Запрашиваем все данные с базы
    lock.release()
    reviews = {'reviews': []}
    lock.acquire(True)
    for item in cursor.fetchall():
        reviews['reviews'].append(list(item)) # Добавляем данные на сервер
    lock.release()
    con.commit() # Подтверждаем изменение в базе данных
    return jsonify(reviews) # Отдаем клиентской части данные из базы

# POST запрос для добавления новых данных в базу
@ application.route('/reviews/', methods=['POST'])
@ cross_origin(supports_credentials=True)
def appendReviews():
    json = request.json # Получаем данные которые нужно добавить в базу
    reviews = json
    try:
        lock.acquire(True)
        cursor.execute(f"INSERT INTO reviews (name, product_name, review) VALUES (?, ?, ?)", reviews) # Добавляем данные в базу
        lock.release()
        con.commit() # Подтверждаем изменение в базе данных
        return jsonify(reviews)
    except:
        return jsonify({"error": "Пользователь с таким же ФИО уже существует!"})

    

# DELETE запрос для удаления выбранных данных в базе
@ application.route('/reviews/', methods=['DELETE'])
@ cross_origin(supports_credentials=True)
def deleteReviews():

    json = request.json # Получаем данные, которые нужно удалить в базе    lock.acquire(True)

    if (checkToken(json['token'])):
        lock.acquire(True)
        cursor.execute(f"DELETE FROM reviews WHERE name=?", (json['name'],)) # Удаляем данные из базы
        lock.release()
        con.commit() # Подтверждаем изменение в базе данных
        return jsonify(json['name'])
    else: 
      return jsonify({'error': 'Ошибка удаления! Проверьте корректность вашего токена'})
  
