const getAllProducts = require('./getAllProducts');
const getClients = require('./getClients');
const getOrders = require('./getOrders');
const getFavorite = require('./getFavorite');
const addFavoriteProduct = require('./addFavoriteProduct');
const deleteFromFavorite = require('./deleteFromFavorite');

module.exports = {
  getClients,
  getOrders,
  getAllProducts,
  getFavorite,
  addFavoriteProduct,
  deleteFromFavorite,
};
