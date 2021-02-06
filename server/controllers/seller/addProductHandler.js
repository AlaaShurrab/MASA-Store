const { addProduct, addImg } = require('../../database/queries');
const { throwError, addProductValidation } = require('../../utilities');

const addProductHandler = (req, res, next) => {
  const { imgs } = req.body;
  req.body.created_at = Date.now();
  addProductValidation(req.body).catch((err) => {
    throw throwError(400, err.details[0].message);
  }).then(addProduct)
    .then(({ rows }) => imgs.forEach((img) => {
      addImg(rows[0].id, img);
    }))
    .then(() => res.status(200).json({
      status: 200,
      message: 'added successfully',
    }))
    .catch(next);
};

module.exports = addProductHandler;
