const { signUpHandler, signInHandler } = require('./common');
const {
  signoutHandler,
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
  searchHandler,
} = require('./seller');

module.exports = {
  signUpHandler,
  signInHandler,
  signoutHandler,
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
  searchHandler,
};
