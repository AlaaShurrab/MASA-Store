const connection = require('../connection');

const fullName = "concat(users.first_name,' ', users.last_name)";
const getOrders = () => connection.query(`select orders.order_number, orders.created_at as order_date, orders.payment_method, orders.product_id , products.name as product_name, products.img_url as product_img, products.category as product_category, products.new_price, orders.quantity , orders.price as total_price,  orders.user_id as client_id, users.first_name as client_first_name, users.last_name as client_last_name, ${fullName} as client_full_name, users.avatar as client_avatar from users inner join orders ON orders.user_id = users.id inner join products ON products.id = orders.product_id `);

module.exports = getOrders;
