const commonRouter = require('express').Router();

const { allProductsHandler, productsByCatogoryHandler } = require('../controllers/common');

commonRouter.get('/products', allProductsHandler);
commonRouter.get('/products/:catogory', productsByCatogoryHandler);

module.exports = commonRouter;
