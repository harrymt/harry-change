import { Api } from '../trades/store';
import { Request, Response, Router, NextFunction } from 'express';

const router: Router = Router();

router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.setHeader("Content-Type", "application/json");
  res.send({ response: Api.buyorders });
});

export default router;

