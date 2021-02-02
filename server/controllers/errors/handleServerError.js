// eslint-disable-next-line no-unused-vars
const handleServerError = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.msg || 'something went wrong';
  res.status(status).json({ status, message });
};

module.exports = handleServerError;
