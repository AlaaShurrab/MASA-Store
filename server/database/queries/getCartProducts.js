const connection = require('../connection');

const getCartProducts = (userID) => connection.query({
  text: 'select cart.id, cart.product_id, products.name,  products.description, products.img_url, products.old_price, products.new_price, cart.quantity from products inner join cart ON cart.product_id = products.id where cart.user_id = $1',
  values: [userID],
});

module.exports = getCartProducts;
