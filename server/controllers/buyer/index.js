const signoutHandler = require('./signoutHandler');
const getFavoriteHandler = require('./getFavoriteHandler');
const addFavoriteHandler = require('./addFavoriteProduct');
const deleteFromFavoriteHandler = require('./deleteFromFavoriteHandler');
const getCartHandler = require('./getCartHandler');
const addCartProductHandler = require('./addCartProductHandler');
const getProfileUserId = require('./getProfileUSerById');
const putProfileUser = require('./putProfileDataById');
const deleteFromCartHandler = require('./deleteFromCartHandler');
const updateCartHandler = require('./updateCartHandler');
const isAuth = require('./isAuth');

module.exports = {
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
  isAuth,
};
