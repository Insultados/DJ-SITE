from flask import request, jsonify
from flask_cors import cross_origin
from reviews.reviews import application, cursor, con, cross_origin, lock, checkToken


try: # Создаем таблицу в базе данных, если ее не существует
    cursor.execute("""CREATE TABLE products
                (
                name TEXT,
                info TEXT,
                price TEXT,
                photo BLOB NOT NULL
                )
            """)
except: 
    pass

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData


# GET запрос на сервер к получению данных с базы
@ application.route('/products/', methods=['GET', 'OPTIONS'])
@ cross_origin(supports_credentials=True)
def getAllProducts():
    lock.acquire(True)
    cursor.execute("SELECT * FROM products") # Запрашиваем все данные с базы
    lock.release()
    products = {'products': []}
    lock.acquire(True)
    for item in cursor.fetchall():
        products['products'].append(list(item)) # Добавляем данные на сервер
    lock.release()

    con.commit() # Подтверждаем изменение в базе данных
    return jsonify(products) # Отдаем клиентской части данные из базы

# POST запрос для добавления новых данных в базу
@ application.route('/products/', methods=['POST'])
@ cross_origin(supports_credentials=True)
def appendProducts():
    json = request.json # Получаем данные которые нужно добавить в базу
    products = json
    if (checkToken(products['token'])):
        try:
            lock.acquire(True)
            cursor.execute(f"INSERT INTO products (name, info, price, photo) VALUES (?, ?, ?, ?)", products['data']) # Добавляем данные в базу
            con.commit() # Подтверждаем изменение в базе данных
            lock.release()
            return jsonify(products['data'])
        except:
            return jsonify({"error": "Пользователь с таким же ФИО уже существует!"})
    else: 
        return jsonify({'error': 'Ошибка обавления товара! Проверьте корректность вашего токена'})

    

# DELETE запрос для удаления выбранных данных в базе
@ application.route('/products/', methods=['DELETE'])
@ cross_origin(supports_credentials=True)
def deleteProducts():
    json = request.json # Получаем данные, которые нужно удалить в базе    lock.acquire(True)
    if (checkToken(json['token'])):
        lock.acquire(True)
        cursor.execute(f"DELETE FROM products WHERE name=?", (json['name'],)) # Удаляем данные из базы
        lock.release()
        con.commit() # Подтверждаем изменение в базе данных
        return jsonify(json['name'])
    else: 
      return jsonify({'error': 'Ошибка удаления! Проверьте корректность вашего токена'})
  