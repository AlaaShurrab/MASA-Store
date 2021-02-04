const commonRouter = require('express').Router();

const { signUpHandler } = require('../controllers');
const { allProductsHandler } = require('../controllers/common');
const { productByIdHandler } = require('../controllers/common');

commonRouter.post('/signup', signUpHandler);
commonRouter.get('/products', allProductsHandler);
commonRouter.get('/product/:productId', productByIdHandler);

module.exports = commonRouter;
