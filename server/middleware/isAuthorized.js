const { verifyToken, throwError } = require('../utilities');

const isAuthorized = (req, res, next) => {
  verifyToken(req.cookies.token)
    .then(({ userId, role }) => {
      req.userId = userId;
      req.role = role;
      next();
    })
    .catch(() => next(throwError(401, 'you are not authorized')));
};

module.exports = isAuthorized;
