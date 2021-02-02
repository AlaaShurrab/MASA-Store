const connection = require('../connection');

const getClients = () => connection.query('select id, first_name, last_name, join_date, total_spending, last_order from users');

module.exports = getClients;
