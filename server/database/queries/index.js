const signUp = require('./signUp');
const getProfileDataById = require('./getProfileUser');
const putProfileDataById = require('./putProfileUser');
const getAllProducts = require('./getAllProducts');
const getProductsByCategory = require('./getProductsByCategory');
const getProductsByTopRating = require('./getProductsByTopRating');
const getProductsByTrending = require('./getProductsByTrending');
const getProductById = require('./getProductById');
const getClientDataByEmail = require('./getClientDataByEmail');
const checkFavoriteProduct = require('./checkFavoriteProduct');
const getFavorite = require('./getFavorite');
const addFavoriteProduct = require('./addFavoriteProduct');
const deleteFromFavorite = require('./deleteFromFavorite');
const checkCartProduct = require('./checkCartProduct');
const getCartProducts = require('./getCartProducts');
const addCartProduct = require('./addCartProduct');
const deleteFromCart = require('./deleteFromCart');
const getClients = require('./getClients');
const getOrders = require('./getOrders');

module.exports = {
  signUp,
  getProfileDataById,
  putProfileDataById,
  getAllProducts,
  getProductsByCategory,
  getProductsByTopRating,
  getProductsByTrending,
  getClientDataByEmail,
  getProductById,
  checkFavoriteProduct,
  getFavorite,
  addFavoriteProduct,
  deleteFromFavorite,
  checkCartProduct,
  getCartProducts,
  addCartProduct,
  deleteFromCart,
  getClients,
  getOrders,
};
