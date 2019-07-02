import { Trades } from '../trades';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(Trades.orders);
});

module.exports = router;
