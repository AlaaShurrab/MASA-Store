const sellerRouter = require('express').Router();

const {
  addProductHandler,
  getClientsHandler,
  getOrdersHandler,
} = require('../controllers');

sellerRouter.post('/product', addProductHandler);
sellerRouter.get('/clients', getClientsHandler);
sellerRouter.get('/orders', getOrdersHandler);

module.exports = sellerRouter;
