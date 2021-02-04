const commonRouter = require('express').Router();

const { allProductsHandler, productsByTopRatingHandler, productsByTrendingHandler } = require('../controllers/common');
const { signUpHandler } = require('../controllers');

commonRouter.post('/signup', signUpHandler);
commonRouter.get('/products', allProductsHandler);
commonRouter.get('/products/top-rated', productsByTopRatingHandler);
commonRouter.get('/products/trending', productsByTrendingHandler);

module.exports = commonRouter;
