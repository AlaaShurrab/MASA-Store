const commonRouter = require('express').Router();
const {
  allProductsHandler,
  productsByCategoryHandler,
  productSearchCategoryHandler,
  productByIdHandler,
  productsByTopRatingHandler,
  productsByTrendingHandler,
} = require('../controllers/common');
const { signUpHandler, signInHandler } = require('../controllers');

commonRouter.post('/signup', signUpHandler);
commonRouter.post('/signin', signInHandler);
commonRouter.get('/products', allProductsHandler);
commonRouter.get('/products/top-rated', productsByTopRatingHandler);
commonRouter.get('/products/trending', productsByTrendingHandler);
commonRouter.get('/products/:category', productsByCategoryHandler);
commonRouter.get('/product-search', productSearchCategoryHandler);
commonRouter.get('/product/:productId', productByIdHandler);

module.exports = commonRouter;
