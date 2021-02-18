const connection = require('../connection');

const putProfileDataById = (
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
  id,
) => {
  const sql = {
    text:
      'update users set first_name=COALESCE($1,first_name ) ,last_name =COALESCE($2,last_name) ,avatar =COALESCE($3,avatar) ,shipping_address1=COALESCE($4,shipping_address1) ,shipping_address2=COALESCE($5,shipping_address2) ,city=COALESCE($6,city)  ,payment_method=COALESCE($7,payment_method) ,payment_card_name=COALESCE($8,payment_card_name) ,payment_card_number=COALESCE($9,payment_card_number) ,payment_card_expire_date=COALESCE($10,payment_card_expire_date) where id=$11 returning *',
    values: [
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
      id,
    ],
  };
  return connection.query(sql);
};

module.exports = putProfileDataById;
