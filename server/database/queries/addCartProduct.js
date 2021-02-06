const connection = require('../connection');

const addCartProduct = (userId, productId, quantity) => connection.query({
  text: 'insert into cart(user_id, product_id, quantity) values($1, $2, $3)',
  values: [userId, productId, quantity],
});

module.exports = addCartProduct;
