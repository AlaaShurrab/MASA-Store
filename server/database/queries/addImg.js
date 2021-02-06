const connection = require('../connection');

const addImg = (id, img) => connection.query({
  text: 'insert into product_img(product_id, img_url) values($1, $2)',
  values: [id, img],
});

module.exports = addImg;
