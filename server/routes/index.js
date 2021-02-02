const router = require('express').Router();
const errorRouter = require('./error');

router.use(errorRouter);

module.exports = router;
