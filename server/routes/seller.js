const sellerRouter = require('express').Router();

const {
  getClientsHandler,
  getOrdersHandler,
  deleteProductHandler,
} = require('../controllers');

sellerRouter.get('/clients', getClientsHandler);
sellerRouter.get('/orders', getOrdersHandler);
sellerRouter.delete('/product/:id', deleteProductHandler);

module.exports = sellerRouter;
