const connection = require('../connection');

const getFavorite = (id) => connection.query({
  text: 'select name, description, img_url, rating, old_price, new_price from products where id in (select product_id from favourite where user_id = $1)',
  values: [id],
});

module.exports = getFavorite;
