const commonRouter = require('express').Router();

const {
  allProductsHandler,
  productsByCatogoryHandler,
  productSearchBycategoryHandler,
  productByIdHandler,
} = require('../controllers/common');

commonRouter.get('/products', allProductsHandler);
commonRouter.get('/products/:catogory', productsByCatogoryHandler);
commonRouter.get('/product-search', productSearchBycategoryHandler);
commonRouter.get('/products', allProductsHandler);
commonRouter.get('/product/:productId', productByIdHandler);

module.exports = commonRouter;
