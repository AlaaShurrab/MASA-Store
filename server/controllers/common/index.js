const { signUpHandler } = require('./signUpHandler');
const allProductsHandler = require('./allProductsHandler');
const productsByTopRatingHandler = require('./productsByTopRatingHandler');
const productsByTrendingHandler = require('./productsByTrendingHandler');
const productByIdHandler = require('./productByIdHandler');

module.exports = {
  signUpHandler,
  allProductsHandler,
  productsByTopRatingHandler,
  productsByTrendingHandler,
  productByIdHandler,
};
