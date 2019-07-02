var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var tradesRouter = require('./routes/trades');
var orderRouter = require('./routes/order');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/trades', tradesRouter);
app.use('/order', orderRouter);

module.exports = app;
