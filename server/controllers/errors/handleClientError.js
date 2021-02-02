const { throwError } = require('../../utilities');

const handleClientError = (req, res, next) => {
  next(throwError(404, 'resource not found'));
};

module.exports = handleClientError;
