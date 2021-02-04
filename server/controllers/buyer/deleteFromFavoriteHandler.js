const { deleteFromFavorite } = require('../../database/queries');

const deleteFromFavoriteHandler = (req, res, next) => {
  const { userId } = req.params;
  const { productId } = req.body;
  deleteFromFavorite(userId, productId)
    .then(() => res.json({ status: 200, message: 'Deleted from favorite successfully' }))
    .catch(next);
};

module.exports = deleteFromFavoriteHandler;
