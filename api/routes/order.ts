import { Trades } from '../trades';
import { Request, Response, Router, NextFunction } from 'express';
var express = require('express');
var router: Router = express.Router();

router.post('/', function(req: Request, res: Response, next: NextFunction) {

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ response: 'OK' });
});

module.exports = router;
