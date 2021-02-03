const buyerRouter = require('express').Router();

const { getFavoriteHandler } = require('../controllers');

buyerRouter.get('/favorite/:userId', getFavoriteHandler);

module.exports = buyerRouter;
