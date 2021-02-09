const { getAllProducts, getClients, getOrders } = require('../../database/queries');
const { throwError } = require('../../utilities');

const searchHandler = (req, res, next) => {
  const { section, word } = req.query;
  if (!word) {
    throw throwError(400, 'You should enter a word to search for');
  }
  switch (section) {
    case 'orders':
      getOrders()
        .then(({ rows }) => {
          const filteredRows = rows.filter((order) => order.client_full_name.includes(word));
          if (!filteredRows.length) {
            return res.status(404).json({
              status: 404,
              message: 'No search results for this client in orders section',
              data: [],
            });
          }
          return res.json({ status: 200, data: filteredRows });
        })
        .catch(next);
      break;
    case 'clients':
      getClients()
        .then(({ rows }) => {
          const filteredRows = rows.filter((client) => client.full_name.includes(word));
          if (!filteredRows.length) {
            return res.status(404).json({
              status: 404,
              message: 'No search results for this client in clients section',
              data: [],
            });
          }
          return res.json({ status: 200, data: filteredRows });
        })
        .catch(next);
      break;
    case 'products':
      getAllProducts()
        .then(({ rows }) => {
          const filteredRows = rows.filter((product) => product.name.includes(word));
          if (!filteredRows.length) {
            return res.status(404).json({
              status: 404,
              message: 'No search results for this product in products section',
              data: [],
            });
          }
          return res.json({ status: 200, data: filteredRows });
        })
        .catch(next);
      break;
    default:
      throw throwError(400, 'You should select the section to search into');
  }
};

module.exports = searchHandler;
