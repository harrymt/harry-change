import { Api } from '../trades/store';
import { BuyOrSell } from "../trades/BuyOrSell";
import { Trade } from "../trades/Trade";
import { Request, Response, Router, NextFunction } from 'express';

const router: Router = Router();

router.post('/', function(req: Request, res: Response, next: NextFunction) {

  const order = Trade.fromRequest(req.body);

  if (order.type == BuyOrSell.Buy) {
    Api.buy(order);
  } else if (order.type == BuyOrSell.Sell) {
    Api.sell(order);
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    response: 'OK'
  });
});

export default router;
