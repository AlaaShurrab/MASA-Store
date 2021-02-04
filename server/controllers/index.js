const { signUpHandler, signInHandler } = require('./common');
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
  signUpHandler,
  signInHandler,
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getClientsHandler,
  getOrdersHandler,
};
