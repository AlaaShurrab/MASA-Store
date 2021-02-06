const connection = require('../connection');

const getOrdersByUsersId = (id) => {
  const sql = { text: 'select * from orders where id =$1 ;', values: [id] };
  return connection.query(sql);
};

module.exports = getOrdersByUsersId;
