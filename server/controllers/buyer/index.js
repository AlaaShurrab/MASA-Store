const getFavoriteHandler = require('./getFavoriteHandler');
const addFavoriteHandler = require('./addFavoriteProduct');
const deleteFromFavoriteHandler = require('./deleteFromFavoriteHandler');
const getCartHandler = require('./getCartHandler');
const addCartProductHandler = require('./addCartProductHandler');
const getProfileUserId = require('./getProfileUSerById');
const putProfileUser = require('./putProfileDataById');
const deleteFromCartHandler = require('./deleteFromCartHandler');
const getUserOrders = require('./getOrdersByUsersId');
const addUserOrdersById = require('./addUserOrdersById');
const updateCartHandler = require('./updateCartHandler');

module.exports = {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
  getProfileUserId,
  putProfileUser,
  deleteFromCartHandler,
  getUserOrders,
  addUserOrdersById,
  updateCartHandler,
};
