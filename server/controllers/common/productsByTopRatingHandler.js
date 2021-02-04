const { getProductsByTopRating } = require('../../database/queries');

const productsByTopRatingHandler = (req, res, next) => {
  getProductsByTopRating()
    .then(({ rows }) => res.status(200).json({
      status: 200,
      data: rows,
    }))
    .catch(next);
};

module.exports = productsByTopRatingHandler;
