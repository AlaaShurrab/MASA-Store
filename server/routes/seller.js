const sellerRouter = require('express').Router();
const { getClientsHandler } = require('../controllers/seller');

sellerRouter.get('/clients', getClientsHandler);

module.exports = sellerRouter;
