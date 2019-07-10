import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import openOrdersRouter from './routes/orders';
import orderRouter from './routes/order';
import tradesRouter from './routes/trades';

const app = express();

app.use(logger('dev', {
    skip: () => process.env.IS_TEST === "Y"
}))

// Use cors
app.use(function(_, res, next) {
    if (!process.env.NODE_ENV) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/orders', openOrdersRouter);
app.use('/order', orderRouter);
app.use('/history', tradesRouter);

export default app;