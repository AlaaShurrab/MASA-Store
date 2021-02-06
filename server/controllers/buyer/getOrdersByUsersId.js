const { getOrdersByUsersId } = require('../../database/queries');

const getUserOrders = (req, res, next) => {
  getOrdersByUsersId(req.params.userId)
    .then(({ rows, rowCount }) => {
      if (rowCount === 0) {
        res.status(400).json({
          status: 400,
          message: 'Order Not Found',
          data: [],
        });
      } else {
        res.status(200).json({ status: 200, data: rows });
      }
    })
    .catch(next);
};
module.exports = getUserOrders;
