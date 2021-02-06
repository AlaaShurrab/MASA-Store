const getFavoriteHandler = require('./getFavoriteHandler');
const addFavoriteHandler = require('./addFavoriteProduct');
const deleteFromFavoriteHandler = require('./deleteFromFavoriteHandler');
const getCartHandler = require('./getCartHandler');
const addCartProductHandler = require('./addCartProductHandler');
const getProfileUserId = require('./getProfileUSerById');
const putProfileUser = require('./putProfileDataById');

module.exports = {
  getFavoriteHandler,
  addFavoriteHandler,
  deleteFromFavoriteHandler,
  getCartHandler,
  addCartProductHandler,
  getProfileUserId,
  putProfileUser,
};
