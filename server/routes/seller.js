const sellerRouter = require('express').Router();

const {
  getClientsHandler,
  getOrdersHandler,
} = require('../controllers');

sellerRouter.get('/clients', getClientsHandler);
sellerRouter.get('/orders', getOrdersHandler);

module.exports = sellerRouter;
