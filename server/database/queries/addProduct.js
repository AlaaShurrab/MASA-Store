const connection = require('../connection');

const addProduct = (reqBody) => connection.query({
  text: 'insert into products(name, description, img_url,category,rating,new_price,quantity,created_at) values($1, $2, $3, $4, $5, $6, $7, $8) returning id',
  values: [
    reqBody.name,
    reqBody.description,
    reqBody.img_url,
    reqBody.category,
    reqBody.rating,
    reqBody.price,
    reqBody.quantity,
    reqBody.created_at],
});

module.exports = addProduct;
