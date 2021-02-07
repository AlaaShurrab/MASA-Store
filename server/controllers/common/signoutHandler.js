const { throwError } = require('../../utilities');

const signoutHandler = (req, res, next) => {
  try {
    res.clearCookie('token');
    res.json({
      title: 'Logout Successful',
    });
  } catch (err) {
    next(throwError(400, 'logOut field'));
  }
};

module.exports = signoutHandler;
