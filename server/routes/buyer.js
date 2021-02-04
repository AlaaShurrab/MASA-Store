const buyerRouter = require('express').Router();

const {
  getCartHandler,
} = require('../controllers');

buyerRouter.get('/cart/:userId', getCartHandler);

module.exports = buyerRouter;
