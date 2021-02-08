const { throwError } = require('../utilities');

const isAdmin = (req, res, next) => {
  if (req.role === 'admin') {
    next();
  } else {
    next(throwError(401, 'You are not authorized'));
  }
};

module.exports = isAdmin;
