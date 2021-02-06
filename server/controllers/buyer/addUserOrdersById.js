const { throwError } = require('../../utilities');
const { addOrdersById, getUsersOrdersByProductId } = require('../../database/queries');

const addUserOrdersById = (req, res, next) => {
  const {
    productId,
    quantity,
    price,
    paymentMethod,
  } = req.body;
  const { user_id } = req.params;
  getUsersOrdersByProductId(user_id, productId)
    .then((rowCount) => {
      if (quantity < 1) {
        throw throwError(400, 'quantity must be greater than 1');
      } else {
        const orderNumber = Date.now() + userId + productId;
        return addOrdersById(productId, quantity, price, paymentMethod, orderNumber);
      }
    })
    .then(() => res.json({ status: 200, message: 'Order is added successfully' }))
    .catch(next);
};
module.exports = addUserOrdersById;
