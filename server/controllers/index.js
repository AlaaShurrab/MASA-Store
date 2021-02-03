const {
  getClientsHandler,
  getOrdersHandler,
} = require('./seller');

const {
  getFavoriteHandler,
  addFavoriteHandler,
} = require('./buyer');

module.exports = {
  getClientsHandler,
  getOrdersHandler,
  getFavoriteHandler,
  addFavoriteHandler,
};
