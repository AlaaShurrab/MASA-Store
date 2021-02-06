const { deleteFromCart, checkCartProduct } = require('../../database/queries');
const { throwError } = require('../../utilities');

const deleteFromCartHandler = (req, res, next) => {
  const { userId } = req.params;
  const { productId } = req.body;
  checkCartProduct(userId, productId)
    .then(({ rowCount }) => {
      if (!rowCount) {
        throw throwError(400, 'This product does not exist in your cart!');
      }
      return deleteFromCart(userId, productId);
    })
    .then(() => res.json({ status: 200, message: 'Deleted from cart successfully' }))
    .catch(next);
};

module.exports = deleteFromCartHandler;
