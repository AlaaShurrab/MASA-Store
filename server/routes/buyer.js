const buyerRouter = require('express').Router();

const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
  deleteFromCartHandler,
  updateCartHandler,
} = require('../controllers');

buyerRouter.get('/favorite/:userId', getFavoriteHandler);
buyerRouter.post('/favorite/:userId', addFavoriteHandler);
buyerRouter.delete('/favorite/:userId', deleteFromFavoriteHandler);
buyerRouter.get('/cart/:userId', getCartHandler);
buyerRouter.post('/cart/:userId', addCartProductHandler);
buyerRouter.delete('/cart/:userId', deleteFromCartHandler);
buyerRouter.put('/cart/:userId', updateCartHandler);

module.exports = buyerRouter;
