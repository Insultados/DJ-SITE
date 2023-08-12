from products.products import *
from reviews.reviews import *


# Запуск сервера на порту 8080
if __name__ == "__main__":
    application.run(debug=True, port='8080')
