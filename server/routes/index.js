const router = require('express').Router();

const errorRouter = require('./error');
const commonRouter = require('./common');
const sellerRouter = require('./seller');
const buyerRouter = require('./buyer');

router.use(commonRouter);
router.use(sellerRouter);
router.use(buyerRouter);
router.use(errorRouter);

module.exports = router;
