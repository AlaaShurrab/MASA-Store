const buyerRouter = require('express').Router();

const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
} = require('../controllers');

buyerRouter.get('/favorite/:userId', getFavoriteHandler);
buyerRouter.post('/favorite/:userId', addFavoriteHandler);
buyerRouter.delete('/favorite/:userId', deleteFromFavoriteHandler);

module.exports = buyerRouter;
