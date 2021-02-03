const commonRouter = require('express').Router();

const { allProductsHandler } = require('../controllers/common');
const { productByIdHandler } = require('../controllers/common');

commonRouter.get('/products', allProductsHandler);
commonRouter.get('/product/:productId', productByIdHandler);

module.exports = commonRouter;
