const { getProductsByCatogory, getAllProducts } = require('../../database/queries');

const productSearchBycategoryHandler = (req, res, next) => {
  const { word, category } = req.query;
  console.log(word);
  if (!word) {
    return res.status(404).json({
      status: 404,
      message: 'you need to enter a word to search for',
      data: [],
    });
  } if (!category) {
    return getAllProducts()
      .then(({ rows }) => {
        if (!rows.length) {
          return res.status(404).json({
            status: 404,
            message: 'product does not exist',
            data: [],
          });
        }
        rows.filter((product) => product.name.includes(word));
        return res.status(200).json({
          status: 200,
          data: rows.filter((product) => product.name.includes(word)),
        });
      })
      .catch(next);
  }
  return getProductsByCatogory(category)
    .then(({ rows }) => {
      if (!rows.length) {
        return res.status(404).json({
          status: 404,
          message: 'there is no item with like this in this category',
          data: [],
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows.filter((product) => product.name.includes(word)),
      });
    })
    .catch(next);
};

module.exports = productSearchBycategoryHandler;
