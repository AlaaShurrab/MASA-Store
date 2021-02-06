const signUp = require('./signUp');
const getProfileDataById = require('./getProfileUser');
const putProfileDataById = require('./putProfileUser');
const getAllProducts = require('./getAllProducts');
const getProductsByTopRating = require('./getProductsByTopRating');
const getProductsByTrending = require('./getProductsByTrending');
const getProductById = require('./getProductById');
const addProduct = require('./addProduct');
const addImg = require('./addImg');
const putProduct = require('./putProduct');
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
  getProductsByTopRating,
  getProductsByTrending,
  getClientDataByEmail,
  getProductById,
  addProduct,
  addImg,
  putProduct,
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
