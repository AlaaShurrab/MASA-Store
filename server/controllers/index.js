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
  updateCartHandler,
} = require('./buyer');
const {
  addProductHandler,
  putProductHandler,
  getClientsHandler,
  getOrdersHandler,
  deleteProductHandler,
} = require('./seller');

module.exports = {
  signUpHandler,
  signInHandler,
  addProductHandler,
  putProductHandler,
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
  deleteFromCartHandler,
  updateCartHandler,
  getClientsHandler,
  getOrdersHandler,
  getProfileUserId,
  putProfileUser,
  deleteProductHandler,
};
