const signUpHandler = require('./signUpHandler');
const signInHandler = require('./signInHandler');
const signoutHandler = require('./signoutHandler');
const allProductsHandler = require('./allProductsHandler');
const productsByCategoryHandler = require('./productsByCategoryHandler');
const productSearchCategoryHandler = require('./productSearchCategoryHandler');
const productsByTopRatingHandler = require('./productsByTopRatingHandler');
const productsByTrendingHandler = require('./productsByTrendingHandler');
const productByIdHandler = require('./productByIdHandler');

module.exports = {
  signUpHandler,
  signInHandler,
  signoutHandler,
  allProductsHandler,
  productsByCategoryHandler,
  productSearchCategoryHandler,
  productsByTopRatingHandler,
  productsByTrendingHandler,
  productByIdHandler,
};
