const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
} = require('./buyer');

const {
  getClientsHandler,
  getOrdersHandler,
} = require('./seller');

module.exports = {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getClientsHandler,
  getOrdersHandler,
};
