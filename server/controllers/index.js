const { signUpHandler } = require('./common');
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
  getClientsHandler,
  getOrdersHandler,
  deleteProductHandler,
} = require('./seller');

module.exports = {
  signUpHandler,
  addProductHandler,
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
