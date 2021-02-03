const { getAllProducts } = require('../../database/queries');

const allProductsHandler = (req, res, next) => {
  getAllProducts()
    .then(({ rows }) => res.status(200).json({
      status: 200,
      data: rows,
    }))
    .catch(next);
};

module.exports = allProductsHandler;
