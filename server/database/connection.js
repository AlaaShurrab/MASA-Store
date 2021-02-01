const {Pool} = require('pg');
require('dotenv').config();
let urlDb = "";
const { NODE_ENV, DATABASE_URL, DB_DEV_URL, DB_TEST_URL } = process.env;

switch (NODE_ENV) {
  case "production":
    urlDb = DATABASE_URL;
    break;
  case "development":
    urlDb = DB_DEV_URL;
    break;
  case "test":
    urlDb = DB_TEST_URL;
    break;
  default:
    throw new Error("No Database!");
}

const options = {
  connectionString: urlDb,
  ssl: process.env.NODE_ENV === "production",
};

module.exports = new Pool(options);

