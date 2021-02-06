const connection = require('../connection');

const getUsersOrdersByProductId = (
  user_id,
  product_id,

) => {
  const sql = {
    text:
    'select * from orders where user_id=$1 and product_id=$2',
    values: [
      user_id,
      product_id],
  };
  return connection.query(sql);
};

module.exports = getUsersOrdersByProductId;
