const sellerRouter = require('express').Router();

const {
  addProductHandler,
  putProductHandler,
  getClientsHandler,
  getOrdersHandler,
  deleteProductHandler,
  searchHandler,
} = require('../controllers');

sellerRouter.post('/product', addProductHandler);
sellerRouter.put('/product/:id', putProductHandler);
sellerRouter.get('/clients', getClientsHandler);
sellerRouter.get('/orders', getOrdersHandler);
sellerRouter.delete('/product/:id', deleteProductHandler);
sellerRouter.get('/search', searchHandler);

module.exports = sellerRouter;
