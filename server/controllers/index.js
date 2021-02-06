const { signUpHandler } = require('./common');
const {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
  deleteFromCartHandler,
  updateCartHandler,
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
  addCartProductHandler,
  deleteFromCartHandler,
  updateCartHandler,
  getClientsHandler,
  getOrdersHandler,
};
