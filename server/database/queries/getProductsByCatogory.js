const connection = require('../connection');

const getProductsByCatogory = (Catogory) => connection.query({
  text: 'select * from products where category = $1 ;',
  values: [Catogory],
});

module.exports = getProductsByCatogory;
