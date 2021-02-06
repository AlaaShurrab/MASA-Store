const { deleteProduct, getProductById } = require('../../database/queries');
const { throwError } = require('../../utilities');

const deleteProductHandler = (req, res, next) => {
  const { id } = req.params;
  getProductById(id)
    .then(({ rows }) => {
      if (!rows.length) {
        throw throwError(400, 'This product does not exist');
      }
      return deleteProduct(id);
    })
    .then(() => res.json({ status: 200, message: 'Deleted successfully' }))
    .catch(next);
};

module.exports = deleteProductHandler;
