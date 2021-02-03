const { addFavoriteProduct } = require('../../database/queries');

const addFavoriteHandler = (req, res, next) => {
  const { productId } = req.body;
  const { userId } = req.params;
  addFavoriteProduct(userId, productId)
    .then(() => res.json({ status: 200, message: 'A new favorite product is added successfully' }))
    .catch(next);
};

module.exports = addFavoriteHandler;
