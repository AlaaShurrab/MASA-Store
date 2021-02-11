const connection = require('../connection');

const updateProductById = (noOfOrders, quantity, productId) => connection.query({
  text: 'update products set number_of_orders =COALESCE($1,number_of_orders), quantity =COALESCE($2,quantity) where id = $3',
  values: [noOfOrders, quantity, productId],
});

module.exports = updateProductById;
