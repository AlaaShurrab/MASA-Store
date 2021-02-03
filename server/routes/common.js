const commonRouter = require('express').Router();

const { allProductsHandler } = require('../controllers/common');

commonRouter.get('/products', allProductsHandler);

module.exports = commonRouter;
