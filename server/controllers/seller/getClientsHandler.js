const { getClients } = require('../../database/quieres');

const getClientsHandler = (req, res, next) => {
  getClients()
    .then(({ rows }) => res.json({ status: 200, data: rows }))
    .catch(next);
};

module.exports = getClientsHandler;
