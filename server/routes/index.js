const router = require('express').Router();

const errorRouter = require('./error');
const commonRouter = require('./common');

router.use(commonRouter);
router.use(errorRouter);

module.exports = router;
