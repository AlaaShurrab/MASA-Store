const connection = require('../connection');

const getAllProducts = () => connection.query('select id, name, description, quantity, category, img_url, rating, old_price, new_price from products ;');

module.exports = { getAllProducts };
