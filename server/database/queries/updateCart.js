const connection = require('../connection');

const updateCart = (userId, productId, quantity) => connection.query({
  text: 'update cart set quantity = $1 where user_id = $2 and product_id = $3',
  values: [quantity, userId, productId],
});

module.exports = updateCart;
