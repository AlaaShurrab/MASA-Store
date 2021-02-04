const { getCartProducts } = require('../../database/queries');

const getCartHandler = (req, res, next) => {
  const { userId } = req.params;
  getCartProducts(userId)
    .then(({ rows, rowCount }) => {
      if (!rowCount) {
        return res.status(404).json({
          status: 404,
          message: 'There are no products added to your cart',
          data: [],
        });
      }
      return res.status(200).json({ status: 200, data: rows });
    })
    .catch(next);
};

module.exports = getCartHandler;
