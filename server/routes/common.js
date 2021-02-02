const commonRouter = require('express').Router();

const { handlerAllProducts } = require('../controllers/common');

commonRouter.get('/products', handlerAllProducts);

module.exports = commonRouter;
