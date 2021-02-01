const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('../connection');

const buildDb = () => {
  const buildSql = readFileSync(join(__dirname, 'build.sql')).toString();
  const fakeData = readFileSync(join(__dirname, 'fakeData.sql')).toString();
  return connection.query(buildSql).then(() => connection.query(fakeData));
};

module.exports = buildDb;
