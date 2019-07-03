import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import openOrdersRouter from './routes/orders';
import orderRouter from './routes/order';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/orders', openOrdersRouter);
app.use('/order', orderRouter);

export default app;