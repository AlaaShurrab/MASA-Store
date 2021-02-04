const { getFavorite } = require('../../database/queries');

const getFavoriteHandler = (req, res, next) => {
  const { userId } = req.params;
  getFavorite(userId)
    .then(({ rows, rowCount }) => {
      if (!rowCount) {
        return res.status(404).json({
          status: 404,
          message: 'favorite list is empty',
          data: [],
        });
      }
      return res.status(200).json({ status: 200, data: rows });
    })

    .catch(next);
};

module.exports = getFavoriteHandler;
