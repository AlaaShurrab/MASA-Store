const bcrypt = require('bcrypt');

const { signInValidation, throwError, jwtString } = require('../../utilities');
const { signIn } = require('../../database/queries');

const signInHandler = (req, res, next) => {
  let userID;
  const { email, password } = req.body;
  signInValidation(req.body).catch((err) => {
    throw throwError(400, err.details[0].message);
  }).then(() => signIn(email))
    .then((result) => {
      if (result.rowCount === 0) {
        throw throwError(409, 'this email is not registered');
      } else {
        userID = result.rows[0].id;
        return result;
      }
    })
    .then((userResult) => bcrypt.compare(password, userResult.rows[0].password))
    .then((success) => {
      if (!success) {
        throw new Error('bad request');
      }
      return jwtString({ userID }, process.env.SECRET_KEY);
    })
    .then((token) => {
      res.cookie('token', token, { httpOnly: true }).json({ status: 201, message: 'sign in successful' });
    })
    .catch(next);
};
module.exports = { signInHandler };
