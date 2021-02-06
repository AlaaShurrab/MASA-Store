const { addCartProduct, checkCartProduct } = require('../../database/queries');
const { throwError } = require('../../utilities');

const addCartProductHandler = (req, res, next) => {
  const { productId, quantity } = req.body;
  const { userId } = req.params;
  checkCartProduct(userId, productId)
    .then(({ rowCount }) => {
      if (rowCount) {
        throw throwError(400, 'This product already exists in your cart!');
      }
      if (quantity < 1) {
        throw throwError(400, 'Quantity must be larger than 0');
      }
      return addCartProduct(userId, productId, quantity);
    })
    .then(() => res.json({ status: 200, message: 'The product is added successfully to your cart' }))
    .catch(next);
};

module.exports = addCartProductHandler;
