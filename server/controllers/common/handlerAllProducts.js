const { getAllProducts } = require('../../database/quieres');

const handlerAllProducts = (req, res, next) => {
  getAllProducts()
    .then(({ rows }) => res.status(200).json({
      status: 200,
      data: rows,
    }))
    .catch(next);
};

module.exports = handlerAllProducts;
