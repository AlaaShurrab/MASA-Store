const bcrypt = require('bcrypt');

const { signUpValidation, throwError, jwtString } = require('../../utilities');
const { signUp, getClientDataByEmail } = require('../../database/queries');

const signUpHandler = (req, res, next) => {
  const {
    email, first_name, last_name, password,
  } = req.body;
  signUpValidation(req.body).catch((err) => {
    throw throwError(400, err.details[0].message);
  }).then(() => getClientDataByEmail(email))
    .then(({ rowCount }) => {
      if (rowCount !== 0) {
        throw throwError(409, 'this email is already registered');
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hashPassword) => signUp(email, first_name, last_name, hashPassword))
    .then((userData) => userData.rows[0])
    .then((data) => {
      const { id } = data;
      return jwtString({ userID: id });
    })
    .then((token) => {
      res.cookie('token', token, { httpOnly: true }).json({ status: 201, message: 'sign up successful' });
    })
    .catch(next);
};
module.exports = { signUpHandler };
