const connection = require('../connection');
const {
  getProfileDataById,
  getFavorite,
  getCartProducts,
} = require('./index');

const getStarterData = async (userId) => {
  let favoriteData = [];
  let cartProducts = [];
  try {
    await connection.query('BEGIN');
    const profileDataQuery = await getProfileDataById(userId);
    const profileData = profileDataQuery.rows[0];
    if (profileData.role !== 'admin') {
      const favoriteDataQuery = await getFavorite(userId);
      favoriteData = favoriteDataQuery.rows;
      const cartProductsQuery = await getCartProducts(userId);
      cartProducts = cartProductsQuery.rows;
    }
    const data = {
      profileData, favoriteData, cartProducts, role: profileData.role,
    };
    await connection.query('COMMIT');
    return data;
  } catch (e) {
    await connection.query('ROLLBACK');
    return 'error';
  }
};

module.exports = { getStarterData };
