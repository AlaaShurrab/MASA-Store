const router = require('express').Router();

const errorRouter = require('./error');
const commonRouter = require('./common');
const sellerRouter = require('./seller');

router.use(commonRouter);
router.use(sellerRouter);
router.use(errorRouter);

module.exports = router;
