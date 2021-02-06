const connection = require('../connection');

const deleteFromCart = (userId, productId) => connection.query({
  text: 'delete from cart where user_id = $1 and product_id = $2',
  values: [userId, productId],
});

module.exports = deleteFromCart;
