const buyerRouter = require('express').Router();

const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
} = require('../controllers');

buyerRouter.get('/favorite/:userId', getFavoriteHandler);
buyerRouter.post('/favorite/:userId', addFavoriteHandler);
buyerRouter.delete('/favorite/:userId', deleteFromFavoriteHandler);
buyerRouter.get('/cart/:userId', getCartHandler);

module.exports = buyerRouter;
