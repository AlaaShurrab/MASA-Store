const { getProductById } = require('../../database/queries');

const productByIdHandler = (req, res, next) => {
  getProductById(req.params.productId)
    .then(({ rows }) => res.status(200).json({
      status: 200,
      data: rows,
    }))
    .catch(next);
};

module.exports = productByIdHandler;
