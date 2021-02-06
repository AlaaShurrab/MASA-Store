const { throwError } = require('../../utilities');
const { addOrdersById, getUsersOrdersByProductId } = require('../../database/queries');

const addUserOrdersById = (req, res, next) => {
  const {
    product_id, quantity, price, payment_method, order_number,
  } = req.body;
  const { user_id } = req.params;
  getUsersOrdersByProductId(user_id, product_id)
    .then((rowCount) => {
      if (rowCount) {
        throw throwError(400, 'order is already exits');
      } if (quantity < 1) {
        throw throwError(400, 'quantity must be greater than 1');
      } else {
        return addOrdersById(user_id, product_id, quantity, price, payment_method, order_number);
      }
    })
    .then(() => res.json({ status: 200, message: 'Order is added successfully' }))
    .catch(next);
};
module.exports = addUserOrdersById;
