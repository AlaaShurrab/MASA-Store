const express = require("express");
const { join } = require("path");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const app = express();

app.disable("x-powered-by");
app.set("port", process.env.PORT || 5000);

const middleware = [
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
];
app.use(middleware);

module.exports = app;
