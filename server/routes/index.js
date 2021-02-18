const router = require('express').Router();

const commonRouter = require('./common');
const buyerRouter = require('./buyer');
const sellerRouter = require('./seller');
const { handleClientError, handleServerError } = require('../controllers/errors');
const { isAuthorized, isAdmin } = require('../middleware');

router.use(commonRouter);
router.use(isAuthorized);
router.use(buyerRouter);
router.use(isAdmin);
router.use(sellerRouter);

router.use(handleClientError);
router.use(handleServerError);

module.exports = router;
