const connection = require('../connection');

const checkCartProduct = (userId, productId) => connection.query({
  text: 'select product_id from cart where user_id = $1 and product_id = $2',
  values: [userId, productId],
});

module.exports = checkCartProduct;
