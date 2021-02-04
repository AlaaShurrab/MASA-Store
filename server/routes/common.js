const commonRouter = require('express').Router();

const { allProductsHandler, productsByTopRatingHandler, productsByTrendingHandler } = require('../controllers/common');

commonRouter.get('/products', allProductsHandler);
commonRouter.get('/products/top-rated', productsByTopRatingHandler);
commonRouter.get('/products/trending', productsByTrendingHandler);

module.exports = commonRouter;
