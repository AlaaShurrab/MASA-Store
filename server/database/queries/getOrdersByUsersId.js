const connection = require('../connection');

const getOrdersByUsersId = (id) => {
  const sql = { text: 'select orders.id, orders.product_id, orders.quantity,orders.created_at, orders.price, orders.order_number, orders.payment_method, products.name,  products.description, products.img_url, products.old_price, products.new_price from products inner join orders ON orders.product_id = products.id where orders.user_id = $1 ;', values: [id] };
  return connection.query(sql);
};

module.exports = getOrdersByUsersId;
