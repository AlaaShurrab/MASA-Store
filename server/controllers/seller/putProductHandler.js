const { putProduct, getProductById } = require('../../database/queries');

const putProductHandler = (req, res, next) => {
  const { id } = req.params;
  getProductById(id).then(({ rows }) => {
    console.log('hi');
    if (!rows.length) {
      return res.status(400).json({
        status: 400,
        message: 'product Not Found',
        data: [],
      });
    }
    if (!(rows[0].new_price === req.body.price)) { req.body.oldPrice = rows[0].new_price; }
    return putProduct(id, req.body);
  }).then(({ rows }) => {
    res.status(200).json({
      status: 200,
      message: 'product updated successfully',
      data: rows,
    });
  }).catch(next);
};

module.exports = putProductHandler;
