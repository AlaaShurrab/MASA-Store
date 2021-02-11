const { placeOrder } = require('../../database/queries/placeOrder');
const { throwError, addOrderValidation } = require('../../utilities');

const addUserOrdersById = (req, res, next) => {
  const { orders, paymentMethod } = req.body;
  const { userId } = req.params;
  const orderType = Array.isArray(orders);
  const unCompletedOrders = [];
  if (!orderType || orders.length === 0) {
    throw throwError(400, 'orders must be array with one product at least');
  } else {
    const orderNumber = `${Date.now()}‏${userId}`;
    orders.forEach((order, index) => {
      const { productId, quantity } = order;
      addOrderValidation(order)
        .then(() => placeOrder(
          productId,
          quantity,
          paymentMethod,
          orderNumber,
          userId,
        ))
        .then((isFailed) => {
          if (isFailed) {
            unCompletedOrders.push(isFailed);
          }
          if (index === orders.length - 1) {
            if (unCompletedOrders.length > 0) {
              res.status(200).json({
                message: 'order completed partially',
                failedItem: unCompletedOrders,
              });
            } else {
              res.status(200).json({ message: 'order complete' });
            }
          }
        })
        .catch(next);
    });
  }
};
module.exports = addUserOrdersById;
