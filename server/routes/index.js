const router = require('express').Router();

const commonRouter = require('./common');
const sellerRouter = require('./seller');
const { handleClientError, handleServerError } = require('../controllers/errors');

router.use(commonRouter);
router.use(sellerRouter);

router.use(handleClientError);
router.use(handleServerError);

module.exports = router;
