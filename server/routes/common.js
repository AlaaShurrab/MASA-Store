const commonRouter = require('express').Router();

const { allProductsHandler, productsByTopRatingHandler } = require('../controllers/common');

commonRouter.get('/products', allProductsHandler);
commonRouter.get('/products/top-rated', productsByTopRatingHandler);

module.exports = commonRouter;
