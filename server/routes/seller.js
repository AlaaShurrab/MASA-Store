const sellerRouter = require('express').Router();
const { getClientsHandler } = require('../controllers');

sellerRouter.get('/clients', getClientsHandler);

module.exports = sellerRouter;
