const connection = require('../connection');

const deleteProduct = (productId) => connection.query({
  text: 'delete from products where id = $1',
  values: [productId],
});

module.exports = deleteProduct;
