const connection = require('../connection');

const getProductsByCategory = (Category) => connection.query({
  text: 'select * from products where category = $1 ;',
  values: [Category],
});

module.exports = getProductsByCategory;
