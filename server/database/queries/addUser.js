const connection = require('../connection');

const signUp = (email, firstName, lastName, password) => {
  const sql = {
    text: 'INSERT INTO users ( email,first_name,last_name, password) values($1 ,$2, $3, $4) returning *;',
    values: [email, firstName, lastName, password],
  };
  return connection.query(sql);
};

module.exports = signUp;
