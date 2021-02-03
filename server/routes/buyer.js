const buyerRouter = require('express').Router();

const {
  getFavoriteHandler,
  addFavoriteHandler,
} = require('../controllers');

buyerRouter.get('/favorite/:userId', getFavoriteHandler);
buyerRouter.post('/favorite/:userId', addFavoriteHandler);

module.exports = buyerRouter;
