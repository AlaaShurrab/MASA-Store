BEGIN;

DROP TABLE IF EXISTS users, products, orders, product_img, favourite, cart CASCADE;

CREATE TABLE users (
  id  SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255)NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  avatar TEXT DEFAULT 'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
  role VARCHAR(255) DEFAULT 'user',
  shipping_address1 VARCHAR(255),
  shipping_address2 VARCHAR(255),
  city VARCHAR(255),
  payment_method VARCHAR(255),
  payment_card_name VARCHAR(255),
  payment_card_number INTEGER,
  payment_card_expire_date INTEGER,
  join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_spending FLOAT DEFAULT 0,
  last_order TIMESTAMP
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  img_url TEXT,
  category VARCHAR(255),
  rating FLOAT,
  number_of_orders INTEGER DEFAULT 0,
  old_price FLOAT,
  new_price FLOAT,
  quantity INTEGER DEFAULT 100,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
  product_id INTEGER REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
  quantity INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  price FLOAT,
  order_number VARCHAR(255),
  payment_method VARCHAR(255)
);

CREATE TABLE product_img (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER REFERENCES products(id) ON UPDATE CASCADE,
  img_url TEXT
);

 CREATE TABLE favourite (
  id SERIAL PRIMARY KEY NOT NULL, 
  user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
  product_id INTEGER REFERENCES products(id) ON UPDATE CASCADE
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
  product_id INTEGER REFERENCES products(id)  ON UPDATE CASCADE ON DELETE CASCADE,
  quantity INTEGER DEFAULT 0
);

COMMIT;
