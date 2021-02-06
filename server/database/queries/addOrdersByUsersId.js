const connection = require('../connection');

const addOrdersById = (
  userId,
  productId,
  quantity,
  price,
  paymentMethod,
  orderNumber,
) => {
  const sql = {
    text:
    'insert into orders( user_id, product_id,quantity,price,payment_method,order_number) values ($1, $2)',
    values: [
      userId,
      productId,
      quantity,
      price,
      paymentMethod,
      orderNumber,
    ],
  };
  return connection.query(sql);
};

module.exports = addOrdersById;
