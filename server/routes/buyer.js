const buyerRouter = require('express').Router();

const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
  getProfileUserId,
  putProfileUser,
  deleteFromCartHandler,
  getUserOrders,
  addUserOrdersById,
  updateCartHandler,
} = require('../controllers');

buyerRouter.get('/favorite/:userId', getFavoriteHandler);
buyerRouter.post('/favorite/:userId', addFavoriteHandler);
buyerRouter.delete('/favorite/:userId', deleteFromFavoriteHandler);
buyerRouter.get('/cart/:userId', getCartHandler);
buyerRouter.post('/cart/:userId', addCartProductHandler);
buyerRouter.get('/profile/:userId', getProfileUserId);
buyerRouter.put('/profile/:userId', putProfileUser);
buyerRouter.delete('/cart/:userId', deleteFromCartHandler);
buyerRouter.get('/orders/:userId', getUserOrders);
buyerRouter.post('/orders/:userId', addUserOrdersById);
buyerRouter.put('/cart/:userId', updateCartHandler);

module.exports = buyerRouter;
