const connection = require('../connection');
const {
  addOrdersById,
  getProfileDataById,
  updateUserFinancialStatement,
  updateProductById,
  getProductById,
} = require('./index');

const placeOrder = async (
  productId,
  quantity,
  paymentMethod,
  orderNumber,
  userId,
) => {
  let productName;
  try {
    await connection.query('BEGIN');
    const { rows } = await getProfileDataById(userId);
    const productDetails = await getProductById(productId);
    const productPrice = productDetails.rows[0].new_price || 0;
    const totalSpending = (rows[0].total_spending || 0) + quantity * productPrice;
    const timeInPostgresFormat = new Date(Date.now()).toISOString();
    await addOrdersById(
      productId,
      quantity,
      productPrice,
      paymentMethod,
      orderNumber,
      userId,
    );

    await updateUserFinancialStatement(totalSpending, timeInPostgresFormat);
    const noOfOrder = productDetails.rows[0].number_of_orders || 0;
    const quantityInStock = productDetails.rows[0].quantity || 0;
    productName = productDetails.rows[0].name;
    if (quantity > quantityInStock) {
      throw new Error('out of stock');
    }
    await updateProductById(
      noOfOrder + quantity,
      quantityInStock - quantity,
      productId,
    );
    await connection.query('COMMIT');
    return false;
  } catch (e) {
    await connection.query('ROLLBACK');
    return { productId, productName };
  }
};

module.exports = { placeOrder };
