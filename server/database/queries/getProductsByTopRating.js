const connection = require('../connection');

const getProductsByTopRating = () => connection.query('select id, name, description, quantity, category, img_url, rating, old_price, new_price from products order by rating desc ;');

module.exports = getProductsByTopRating;
