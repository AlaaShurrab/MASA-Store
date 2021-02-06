const { getProfileDataById } = require('../../database/queries');
const { putProfileDataById } = require('../../database/queries');

const putProfileUser = (req, res, next) => {
  const {
    first_name,
    last_name,
    avatar,
    shipping_address1,
    shipping_address2,
    city,
    payment_method,
    payment_card_name,
    payment_card_number,
    payment_card_expire_date,
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
          first_name,
          last_name,
          avatar,
          shipping_address1,
          shipping_address2,
          city,
          payment_method,
          payment_card_name,
          payment_card_number,
          payment_card_expire_date,
          userId,
        );
      }
    })
    .then(({ rows }) => res.json({ status: 200, data: rows, message: 'Update successfully' }))

    .catch(next);
};
module.exports = putProfileUser;
