Магазин 
Написать интерфейсы для эмуляции магазина.

Требования:
(+) Магазин должен иметь два интерфейса роботы - продавца (администратора) и покупателя
(+) Магазин должен иметь склад товаров (каталог), кассу
(+) Товар должен иметь обязательные поля
  1. (+) Имя товара
  2. (+) Цена товара
  3. (+) Размер товара
  4. (+) Категория товара
  5. (+) Брэнд / Производитель

Интерфейсы
Продавец магазина
  1. (+) Должен иметь возможность добавить товар на склад // ${addProduct}
  2. (+) Должен иметь возможность продать && предложить товар покупателю по запросу (по имени, по цене, по категории и.т.д) // ${sellProduct} && ${getProduct}
  3. (+) Если товар продан - касса магазина должна пополниться на сумму равную цене товара // ${addToCashbox}
  4. (+) Если товар продан - этот товар должен быть изьят из списка доступных товаров // ${removeProductFromCatalog}
  5. (+) Продавец должен иметь возможность сделать скидку // ${addDiscount}

Покупатель
  1. (+) Должен иметь возможность купить товар // ${buyProduct}
  2. (+) Должен иметь возможность получить список товаров которые отвечают заданым параметрам (несколько параметров - например цена и размер) // ${getProduct}
