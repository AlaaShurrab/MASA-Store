const { throwError, addOrderValidation } = require('../../utilities');
const {
  addOrdersById,
  getProductById,
  getProfileDataById,
  updateUserFinancialStatement,
  updateProductById,
} = require('../../database/queries');
// check order array
// added to database =>orders
// update product quantiy and no orders
// updae user total spending and last order date

const addUserOrdersById = (req, res, next) => {
  const { order, paymentMethod } = req.body;

  const { userId } = req.params;
  const orderType = Array.isArray(order);
  const orderNumber = `${Date.now()}‏${userId}`;
  const unCompletedOrder = [];
  if (!orderType || order.length === 0) {
    throw throwError(400, 'orders must be array with one product at least');
  } else {
    order.forEach((products) => {
      let quantity;
      return addOrderValidation(products)
        .catch((err) => {
          throw throwError(400, `something wrong ${err.details[0].message}`);
        })
        .then((result) => {
          quantity = result.quantity;
          return getProductById(result.productId);
        }).catch((err) => { console.log(err); })
        .then(({ rows }) => {
          const { id, new_price: price } = rows[0];
          console.log(rows, 'jkldfjl;askfjadsl;kfj');
          return addOrdersById(
            id,
            quantity,
            price * quantity,
            paymentMethod,
            orderNumber,
            userId,
          );
        })
        .catch((err) => console.log(err))

        .then(({ rows }) => {
          getProductById(rows);
        })
        .catch((err) => {
          console.log(err.message);
        });
      // .then(() => res.json({
      //   status: 200,
      //   message: 'order added successfully',
      // }))
      // .catch(next);
    });
    // console.log(orderPromise, 'zzzzzzzzzzzzzzzzzzz');
    // Promise.all([orderPromise]).then((res) => console.log(res, 'kjflkajflkafjal;kfj')).catch(next);
  }
};
module.exports = addUserOrdersById;
