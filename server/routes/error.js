const errorRouter = require('express').Router();

const { handleClientError, handleServerError } = require('../controllers/errors');

errorRouter.use(handleClientError);
errorRouter.use(handleServerError);

module.exports = errorRouter;
