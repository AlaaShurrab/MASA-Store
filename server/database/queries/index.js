const addUser = require('./addUser');
const getAllClientDataByEmail = require('./getAllClientDataByEmail');
const getProfileDataById = require('./getProfileUser');
const putProfileDataById = require('./putProfileUser');
const getAllProducts = require('./getAllProducts');
const getProductsByCategory = require('./getProductsByCategory');
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
const updateCart = require('./updateCart');
const getClients = require('./getClients');
const getOrders = require('./getOrders');
const getOrdersByUsersId = require('./getOrdersByUsersId');
const addOrdersById = require('./addOrdersByUsersId');
const getUsersOrdersByProductId = require('./getUsersOrdersByProductId');
const deleteProduct = require('./deleteProduct');
const updateUserFinancialStatement = require('./updateUserFinancialStatement');
const updateProductById = require('./updateProductById');

module.exports = {
  addUser,
  getAllClientDataByEmail,
  getProfileDataById,
  putProfileDataById,
  getAllProducts,
  getProductsByCategory,
  getProductsByTopRating,
  getProductsByTrending,
  getClientDataByEmail,
  getProductById,
  deleteProduct,
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
  updateCart,
  getClients,
  getOrders,
  getOrdersByUsersId,
  addOrdersById,
  getUsersOrdersByProductId,
  updateUserFinancialStatement,
  updateProductById,

};
