const connection = require('../connection');

const checkFavoriteProduct = (userId, productId) => connection.query({
  text: 'select product_id from favourite where user_id = $1 and product_id = $2',
  values: [userId, productId],
});

module.exports = checkFavoriteProduct;
