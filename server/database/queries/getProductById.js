const connection = require('../connection');

const getProductById = (id) => connection.query({
  text: 'select * from products where id = $1 ;',
  values: [id],
});

module.exports = getProductById;
