const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/book');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/v1/books', bookRouter);

module.exports = app