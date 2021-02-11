const connection = require('../connection');

const updateUserFinancialStatement = (
  totalSpending,
  lastOrder,
  id,
) => {
  const sql = {
    text:
      'update users set total_spending =COALESCE($1,total_spending),last_order =COALESCE($2,last_order) where id=$3 returning *',
    values: [

      totalSpending,
      lastOrder,
      id,
    ],
  };
  return connection.query(sql);
};

module.exports = updateUserFinancialStatement;
