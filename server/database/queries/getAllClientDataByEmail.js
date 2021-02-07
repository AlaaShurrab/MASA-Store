const dbConnection = require('../connection');

const signIn = (email) => {
  const sql = {
    text: 'SELECT * FROM users where email = $1 ;',
    values: [email],
  };
  return dbConnection.query(sql);
};

module.exports = signIn;
