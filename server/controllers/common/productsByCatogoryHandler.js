const { getProductsByCatogory } = require('../../database/queries');

const productsByCatogoryHandler = (req, res, next) => {
  getProductsByCatogory(req.params.catogory)
    .then(({ rows }) => {
      if (!rows.length) {
        return res.status(404).json({
          status: 404,
          message: 'product does not exist within this catogory ',
          data: [],
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    })
    .catch(next);
};

module.exports = productsByCatogoryHandler;
