const getFavoriteHandler = require('./getFavoriteHandler');
const addFavoriteHandler = require('./addFavoriteProduct');
const deleteFromFavoriteHandler = require('./deleteFromFavoriteHandler');
const getCartHandler = require('./getCartHandler');
const addCartProductHandler = require('./addCartProductHandler');
const deleteFromCartHandler = require('./deleteFromCartHandler');
const getUserOrders = require('./getOrdersByUsersId');

module.exports = {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
  deleteFromCartHandler,
  getUserOrders,
};
