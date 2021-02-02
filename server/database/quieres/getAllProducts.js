const connection = require('../connection');

const getAllProducts = () => connection.query('select id, name, img_url, rating, new_price from products ;');

module.exports = { getAllProducts };
