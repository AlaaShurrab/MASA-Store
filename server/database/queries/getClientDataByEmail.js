const connection = require('../connection');

const getClientDataByEmail = (email) => {
  const sql = { text: 'select id, email, first_name, last_name, avatar, role, shipping_address1, shipping_address2, city, payment_method, payment_card_name, payment_card_number, payment_card_expire_date, join_date, total_spending, last_order from users where email =$1 ;', values: [email] };
  return connection.query(sql);
};

module.exports = getClientDataByEmail;
