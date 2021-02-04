const router = require('express').Router();

const commonRouter = require('./common');
const sellerRouter = require('./seller');
const buyerRouter = require('./buyer');
const { handleClientError, handleServerError } = require('../controllers/errors');

router.use(commonRouter);
router.use(sellerRouter);
router.use(buyerRouter);
router.use(handleClientError);
router.use(handleServerError);

module.exports = router;
