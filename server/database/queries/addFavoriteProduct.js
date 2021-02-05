const connection = require('../connection');

const addFavoriteProduct = (userId, productId) => connection.query({
  text: 'insert into favourite(user_id, product_id) values ($1, $2)',
  values: [userId, productId],
});

module.exports = addFavoriteProduct;
