const { getProductsByCategory, getAllProducts } = require('../../database/queries');

const productSearchCategoryHandler = (req, res, next) => {
  const { word, category } = req.query;
  if (!word) {
    return res.status(404).json({
      status: 404,
      message: 'you need to enter a word to search for',
      data: [],
    });
  } if (!category) {
    return getAllProducts()
      .then(({ rows }) => {
        const newRows = rows.filter((product) => product.name.includes(word));
        if (!newRows.length) {
          return res.status(404).json({
            status: 404,
            message: 'no search results',
            data: [],
          });
        }
        return res.status(200).json({
          status: 200,
          data: newRows,
        });
      })
      .catch(next);
  }
  return getProductsByCategory(category)
    .then(({ rows }) => {
      const newRows = rows.filter((product) => product.name.includes(word));
      if (!newRows.length) {
        return res.status(404).json({
          status: 404,
          message: 'there is no item with like this in this category',
          data: [],
        });
      }
      return res.status(200).json({
        status: 200,
        data: newRows,
      });
    })
    .catch(next);
};

module.exports = productSearchCategoryHandler;
