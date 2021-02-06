const { getProfileDataById } = require('../../database/queries');

const getProfileUser = (req, res, next) => {
  getProfileDataById(req.params.userId)
    .then(({ rows, rowCount }) => {
      if (rowCount === 0) {
        res.status(400).json({
          status: 400,
          message: 'User Not Found',
          data: [],
        });
      } else {
        res.status(200).json({ status: 200, data: rows });
      }
    })
    .catch(next);
};
module.exports = getProfileUser;
