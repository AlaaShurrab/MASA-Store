const signUp = require('./signUp');
const signIn = require('./signIn');
const getAllProducts = require('./getAllProducts');
const getClientDataByEmail = require('./getClientDataByEmail');
const getProductById = require('./getProductById');
const checkFavoriteProduct = require('./checkFavoriteProduct');
const getFavorite = require('./getFavorite');
const addFavoriteProduct = require('./addFavoriteProduct');
const deleteFromFavorite = require('./deleteFromFavorite');
const getClients = require('./getClients');
const getOrders = require('./getOrders');

module.exports = {
  signUp,
  signIn,
  getAllProducts,
  getClientDataByEmail,
  getProductById,
  checkFavoriteProduct,
  getFavorite,
  addFavoriteProduct,
  deleteFromFavorite,
  getClients,
  getOrders,
};
