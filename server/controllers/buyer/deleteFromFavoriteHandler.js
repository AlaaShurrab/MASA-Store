const { deleteFromFavorite, checkFavoriteProduct } = require('../../database/queries');
const { throwError } = require('../../utilities');

const deleteFromFavoriteHandler = (req, res, next) => {
  const { userId } = req.params;
  const { productId } = req.body;
  checkFavoriteProduct(userId, productId)
    .then(({ rowCount }) => {
      if (!rowCount) {
        throw throwError(400, 'This product does not exist in your favorites list!');
      }
      return deleteFromFavorite(userId, productId);
    })
    .then(() => res.json({ status: 200, message: 'Deleted from favorite successfully' }))
    .catch(next);
};

module.exports = deleteFromFavoriteHandler;
