const commonRouter = require('express').Router();

const { handleClientError } = require('../controllers/errors');

commonRouter.get(handleClientError);

module.exports = commonRouter;
