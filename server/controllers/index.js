const {
  getClientsHandler,
  getOrdersHandler,
} = require('./seller');

const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
} = require('./buyer');

module.exports = {
  getClientsHandler,
  getOrdersHandler,
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
};
