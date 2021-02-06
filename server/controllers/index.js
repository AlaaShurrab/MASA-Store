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
  getClientsHandler,
  getOrdersHandler,
  getProfileUserId,
  putProfileUser,
  deleteProductHandler,
};
