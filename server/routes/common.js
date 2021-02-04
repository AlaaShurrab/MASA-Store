const commonRouter = require('express').Router();

const { signUpHandler } = require('../controllers');
const { allProductsHandler } = require('../controllers/common');

commonRouter.post('/signup', signUpHandler);
commonRouter.get('/products', allProductsHandler);

module.exports = commonRouter;
