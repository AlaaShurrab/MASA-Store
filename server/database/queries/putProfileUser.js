const connection = require('../connection');

const putProfileDataById = (
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
  id,
) => {
  const sql = {
    text:
      'update users set first_name=$1 ,last_name =$2 ,avatar =$3,shipping_address1=$4 ,shipping_address2=$5 ,city=$6  ,payment_method=$7 ,payment_card_name=$8 ,payment_card_number=$9 ,payment_card_expire_date=$10 where id=$11 returning *',
    values: [
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
      id,
    ],
  };
  return connection.query(sql);
};

module.exports = putProfileDataById;
