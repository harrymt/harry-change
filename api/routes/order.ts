import { Trades, Trade, BuyOrSell } from '../trades';

import { Request, Response, Router, NextFunction } from 'express';
var express = require('express');
var router: Router = express.Router();

router.post('/', function(req: Request, res: Response, next: NextFunction) {

  console.log(req.body);
  const order = req.body as Trade;
  console.log(order);

  if (order.type == BuyOrSell.Buy) {
    Trades.buy(order);
  } else if (order.type == BuyOrSell.Sell) {
    Trades.sell(order);
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    response: 'OK',
    body: order
  });
});

module.exports = router;
