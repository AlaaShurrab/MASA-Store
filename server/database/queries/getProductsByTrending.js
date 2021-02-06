const connection = require('../connection');

const getProductsByTrending = () => connection.query('select id, name, description, quantity, category, img_url, rating, old_price, new_price, number_of_orders from products order by number_of_orders desc ;');

module.exports = getProductsByTrending;
