const { addFavoriteProduct, checkFavoriteProduct } = require('../../database/queries');
const { throwError } = require('../../utilities');

const addFavoriteHandler = (req, res, next) => {
  const { productId } = req.body;
  const { userId } = req.params;
  checkFavoriteProduct(userId, productId)
    .then(({ rowCount }) => {
      if (rowCount) {
        throw throwError(400, 'This product already exists in your favorites list!');
      }
      return addFavoriteProduct(userId, productId);
    })
    .then(() => res.json({ status: 200, message: 'A new favorite product is added successfully' }))
    .catch(next);
};

module.exports = addFavoriteHandler;
