const bcrypt = require('bcrypt');

const { signInValidation, throwError, jwtString } = require('../../utilities');
const { getAllClientDataByEmail } = require('../../database/queries');

const signInHandler = (req, res, next) => {
  let clientData;
  const { email, password } = req.body;

  signInValidation(req.body)
    .catch((err) => {
      throw throwError(400, err.details[0].message);
    })
    .then(() => getAllClientDataByEmail(email))
    .then(({ rowCount, rows }) => {
      if (rowCount === 0) {
        throw throwError(400, 'this email is not registered');
      } else {
        [clientData] = rows;
        return clientData;
      }
    })
    .then(({ password: hashedPassword }) => bcrypt.compare(password, hashedPassword))
    .then((success) => {
      if (!success) {
        throw throwError(400, 'please check your email or password');
      }
      return jwtString(
        { userID: clientData.id, role: clientData.role },
        process.env.SECRET_KEY,
      );
    })
    .then((token) => {
      delete clientData.role;
      clientData.password = 'hidden for your security ';
      res
        .cookie('token', token, { httpOnly: true })
        .json({ status: 200, message: 'sign in successful', clientData });
    })
    .catch(next);
};
module.exports = { signInHandler };
