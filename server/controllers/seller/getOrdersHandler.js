const { getOrders } = require('../../database/queries');

const getOrdersHandler = (req, res, next) => {
  getOrders()
    .then(({ rows }) => res.json({ status: 200, data: rows }))
    .catch(next);
};

module.exports = getOrdersHandler;
