const connection = require('../connection');

const getProductById = (id) => connection.query(`select * from products where id = ${id} ;`);

module.exports = getProductById;
