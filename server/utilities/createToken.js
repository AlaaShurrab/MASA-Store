const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;
const jwtString = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, SECRET_KEY, (err, token) => {
    if (err) return reject(err);
    return resolve(token);
  });
});
module.exports = jwtString;
