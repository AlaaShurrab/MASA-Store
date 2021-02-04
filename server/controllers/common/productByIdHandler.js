const { getProductById } = require('../../database/queries');

const productByIdHandler = (req, res, next) => {
  getProductById(req.params.productId)
    .then(({ rows }) => {
      if (!rows.length) {
        return res.status(404).json({
          status: 404,
          message: 'product does not exist',
          data: [],
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    })
    .catch(next);
};

module.exports = productByIdHandler;
