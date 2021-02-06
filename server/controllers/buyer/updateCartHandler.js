const { updateCart, checkCartProduct } = require('../../database/queries');
const { throwError } = require('../../utilities');

const updateCartHandler = (req, res, next) => {
  const { productId, quantity } = req.body;
  const { userId } = req.params;
  checkCartProduct(userId, productId)
    .then(({ rowCount }) => {
      if (!rowCount) {
        throw throwError(400, 'This product does not exist in your cart!');
      }
      if (quantity < 1) {
        throw throwError(400, 'Quantity must be larger than 0');
      }
      return updateCart(userId, productId, quantity);
    })
    .then(() => res.json({ status: 200, message: 'Quantity of products is updated successfully in your cart' }))
    .catch(next);
};

module.exports = updateCartHandler;
