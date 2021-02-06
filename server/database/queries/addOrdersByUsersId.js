const connection = require('../connection');

const addOrdersById = (
  user_id,
  product_id,
  quantity,
  price,
  payment_method,
  order_number,
) => {
  const sql = {
    text:
    'insert into orders( user_id, product_id,quantity,price,payment_method,order_number) values ($1, $2)',
    values: [
      user_id,
      product_id,
      quantity,
      price,
      payment_method,
      order_number,
    ],
  };
  return connection.query(sql);
};

module.exports = addOrdersById;
