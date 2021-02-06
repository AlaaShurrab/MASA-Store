const bcrypt = require('bcrypt');

const { signUpValidation, throwError, jwtString } = require('../../utilities');
const { signUp, getClientDataByEmail } = require('../../database/queries');

const signUpHandler = (req, res, next) => {
  const {
    email, firstName, lastName, password,
  } = req.body;

  let clientData;

  signUpValidation(req.body)
    .catch((err) => {
      throw throwError(400, err.details[0].message);
    })
    .then(() => getClientDataByEmail(email))
    .then(({ rowCount }) => {
      if (rowCount !== 0) {
        throw throwError(409, 'this email is already registered');
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hashPassword) => signUp(email, firstName, lastName, hashPassword))
    .then((userData) => userData.rows[0])
    .then(({
      id, role, ...restOfData
    }) => {
      clientData = restOfData;
      clientData.id = id;
      clientData.password = 'hidden for your security';
      return jwtString({ userID: id, role });
    })
    .then((token) => {
      res
        .cookie('token', token, { httpOnly: true })
        .json({
          status: 201,
          message: 'sign up successfully',
          clientData,
        });
    })
    .catch(next);
};

module.exports = signUpHandler;
