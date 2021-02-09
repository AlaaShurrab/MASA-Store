const connection = require('../connection');

const fullName = "concat(first_name,' ', last_name)";
const getClients = () => connection.query(`select id, first_name, last_name, ${fullName} as full_name, join_date, total_spending, last_order from users`);

module.exports = getClients;
