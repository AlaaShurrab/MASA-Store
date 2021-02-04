const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
} = require('./buyer');

const {
  getClientsHandler,
  getOrdersHandler,
} = require('./seller');

module.exports = {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  getClientsHandler,
  getOrdersHandler,
};
