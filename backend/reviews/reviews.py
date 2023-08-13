import sqlite3;
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import time
import os
from threading import Lock

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
    json = request.json # Получаем данные, которые нужно удалить в базе
    lock.acquire(True)
    cursor.execute(f"DELETE FROM reviews WHERE name=?", (json,)) # Удаляем данные из базы
    lock.release()
    con.commit() # Подтверждаем изменение в базе данных
    return jsonify(json)
