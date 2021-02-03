const { getFavorite } = require('../../database/queries');

const getFavoriteHandler = (req, res, next) => {
  const { userId } = req.params;
  getFavorite(userId)
    .then(({ rows }) => res.json({ status: 200, data: rows }))
    .catch(next);
};

module.exports = getFavoriteHandler;
