const router = require('express').Router();
const errorRouter = require('./error');
const sellerRouter = require('./seller');

router.use(sellerRouter);
router.use(errorRouter);

module.exports = router;
