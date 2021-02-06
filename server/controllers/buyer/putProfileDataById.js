const { getProfileDataById } = require('../../database/queries');
const { putProfileDataById } = require('../../database/queries');
const { throwError } = require('../../utilities');

const putProfileUser = (req, res, next) => {
  const {
    firstName,
    lastName,
    avatar,
    shippingAddress1,
    shippingAddress2,
    city,
    paymentMethod,
    paymentCardName,
    paymentCardNumber,
    paymentCardExpireDate,
  } = req.body;
  const { userId } = req.params;
  getProfileDataById(userId)
    .then(({ rowCount }) => {
      if (rowCount === 0) {
        res.status(400).json({
          status: 400,
          message: 'User Not Found',
          data: [],
        });
      } else {
        return putProfileDataById(
          firstName,
          lastName,
          avatar,
          shippingAddress1,
          shippingAddress2,
          city,
          paymentMethod,
          paymentCardName,
          paymentCardNumber,
          paymentCardExpireDate,
          userId,
        );
      }
    })
    .then(({ rows }) => res.json({ status: 200, data: rows, message: 'Update successfully' }))
    .catch(() => next(throwError(400, 'please check your entered data')));
};
module.exports = putProfileUser;
