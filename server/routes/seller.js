const sellerRouter = require('express').Router();

const {
  addProductHandler,
  putProductHandler,
  getClientsHandler,
  getOrdersHandler,
} = require('../controllers');

sellerRouter.post('/product', addProductHandler);
sellerRouter.put('/product/:id', putProductHandler);
sellerRouter.get('/clients', getClientsHandler);
sellerRouter.get('/orders', getOrdersHandler);

module.exports = sellerRouter;
