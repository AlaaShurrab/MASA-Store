const connection = require('../connection');

const getProfileDataById = (id) => {
  const sql = { text: 'select * from users where id =$1 ;', values: [id] };
  return connection.query(sql);
};

module.exports = getProfileDataById;
