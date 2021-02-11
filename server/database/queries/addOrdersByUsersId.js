const connection = require('../connection');

const addOrdersById = (
  productId,
  quantity,
  price,
  paymentMethod,
  orderNumber,
  userId,
) => {
  const sql = {
    text:
    'insert into orders(product_id,quantity,price,payment_method,order_number,user_id) values ($1,$2,$3,$4,$5,$6) returning*',
    values: [
      productId,
      quantity,
      price,
      paymentMethod,
      orderNumber,
      userId,
    ],
  };
  return connection.query(sql);
};

module.exports = addOrdersById;
