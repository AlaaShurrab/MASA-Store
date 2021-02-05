const { signUpHandler } = require('./common');
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
  signUpHandler,
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  getClientsHandler,
  getOrdersHandler,
};
