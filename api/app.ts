var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var tradesRouter = require('./routes/trades');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/trades', tradesRouter);
app.use('/users', usersRouter);

module.exports = app;
