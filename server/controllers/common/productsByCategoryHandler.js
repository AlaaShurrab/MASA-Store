const { getProductsByCategory } = require('../../database/queries');

const productsByCategoryHandler = (req, res, next) => {
  getProductsByCategory(req.params.category)
    .then(({ rows }) => {
      if (!rows.length) {
        return res.status(404).json({
          status: 404,
          message: 'product does not exist within this category ',
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

module.exports = productsByCategoryHandler;
