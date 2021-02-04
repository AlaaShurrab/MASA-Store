const connection = require('../connection');

const deleteFromFavorite = (userId, productId) => connection.query({
  text: 'delete from favourite where user_id = $1 and product_id = $2',
  values: [userId, productId],
});

module.exports = deleteFromFavorite;
