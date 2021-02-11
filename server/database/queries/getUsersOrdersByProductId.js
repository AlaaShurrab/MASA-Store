const connection = require('../connection');

const getUsersOrdersByProductId = (
  userId,
  productId,

) => {
  const sql = {
    text:
    'select * from orders where user_id=$1 and product_id=$2',
    values: [
      userId,
      productId,
    ],
  };
  return connection.query(sql);
};

module.exports = getUsersOrdersByProductId;
