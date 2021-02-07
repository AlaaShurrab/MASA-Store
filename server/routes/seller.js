const sellerRouter = require('express').Router();

const {
  addProductHandler,
  putProductHandler,
  getClientsHandler,
  getOrdersHandler,
  deleteProductHandler,
} = require('../controllers');

sellerRouter.post('/product', addProductHandler);
sellerRouter.put('/product/:id', putProductHandler);
sellerRouter.get('/clients', getClientsHandler);
sellerRouter.get('/orders', getOrdersHandler);
sellerRouter.delete('/product/:id', deleteProductHandler);

module.exports = sellerRouter;
