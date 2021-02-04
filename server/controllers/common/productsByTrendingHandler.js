const { getProductsByTrending } = require('../../database/queries');

const productsByTrendingHandler = (req, res, next) => {
  getProductsByTrending()
    .then(({ rows }) => res.status(200).json({
      status: 200,
      data: rows,
    }))
    .catch(next);
};

module.exports = productsByTrendingHandler;
