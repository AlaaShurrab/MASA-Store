const { signUpHandler, signInHandler } = require('./common');
const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
  getProfileUserId,
  putProfileUser,
  deleteFromCartHandler,
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
  getCartHandler,
  addCartProductHandler,
  deleteFromCartHandler,
  getClientsHandler,
  getOrdersHandler,
  getProfileUserId,
  putProfileUser,
};
