require('dotenv').config();
const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const routes = require('./routes');

const { handleClientError, handleServerError } = require('./controllers/errors');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

const middleware = [
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
];

app.use(middleware);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1', routes);

const root = join(__dirname, '..', 'client', 'build');

app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

app.use(handleClientError);
app.use(handleServerError);

module.exports = app;
