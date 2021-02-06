const { throwError } = require('../../utilities');
const { addOrdersById } = require('../../database/queries');

const addUserOrdersById = (req, res, next) => {
  const {
    productId,
    quantity,
    price,
    paymentMethod,
  } = req.body;
  const { userId } = req.params;

  if (quantity < 1) {
    throw throwError(400, 'quantity must be greater than 1');
  } else {
    const orderNumber = `${Date.now()}${productId}‏${userId}`;
    addOrdersById(
      productId,
      quantity,
      price,
      paymentMethod,
      orderNumber,
      userId,
    )
      .then(({ rows }) => res.json({ status: 200, data: rows, message: 'added successfully' }))
      .catch(next);
  }
};
module.exports = addUserOrdersById;
