const commonRouter = require('express').Router();

const { allProductsHandler, productsByCatogoryHandler, productSearchBycategoryHandler } = require('../controllers/common');

commonRouter.get('/products', allProductsHandler);
commonRouter.get('/products/:catogory', productsByCatogoryHandler);
commonRouter.get('/product-search', productSearchBycategoryHandler);

module.exports = commonRouter;
