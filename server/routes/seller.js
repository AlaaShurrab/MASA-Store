const sellerRouter = require('express').Router();

const {
  addProductHandler,
  getClientsHandler,
  getOrdersHandler,
  deleteProductHandler,
} = require('../controllers');

sellerRouter.post('/product', addProductHandler);
sellerRouter.get('/clients', getClientsHandler);
sellerRouter.get('/orders', getOrdersHandler);
sellerRouter.delete('/product/:id', deleteProductHandler);

module.exports = sellerRouter;
