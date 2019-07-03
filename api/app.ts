var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var openOrdersRouter = require('./routes/orders');
var orderRouter = require('./routes/order');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/orders', openOrdersRouter);
app.use('/order', orderRouter);

export default app;