const connection = require('../connection');
const {
  getProfileDataById,
  getFavorite,
  getCartProducts,
  getOrders,
} = require('./index');

const getStarterData = async (userId) => {
  let favoriteData = [];
  let cartProducts = [];
  let orderData = [];
  try {
    await connection.query('BEGIN');
    const { rows: [profileData] } = await getProfileDataById(userId);
    if (profileData.role !== 'admin') {
      const [
        favoriteDataQuery,
        cartProductsQuery,
        ordersQuery,
      ] = await Promise.all([
        getFavorite(userId),
        getCartProducts(userId),
        getOrders(userId),
      ]);
      favoriteData = favoriteDataQuery.rows;
      cartProducts = cartProductsQuery.rows;
      orderData = ordersQuery.rows;
    }
    const data = {
      profileData,
      favoriteData,
      cartProducts,
      orderData,
      role: profileData.role,
    };
    await connection.query('COMMIT');
    return data;
  } catch (e) {
    await connection.query('ROLLBACK');
    return 'error';
  }
};

module.exports = { getStarterData };
