const buyerRouter = require('express').Router();

const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
} = require('../controllers');

buyerRouter.get('/favorite/:userId', getFavoriteHandler);
buyerRouter.post('/favorite/:userId', addFavoriteHandler);
buyerRouter.delete('/favorite/:userId', deleteFromFavoriteHandler);
buyerRouter.get('/cart/:userId', getCartHandler);
buyerRouter.post('/cart/:userId', addCartProductHandler);

module.exports = buyerRouter;
