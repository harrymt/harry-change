import { Api } from '../trades/store';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(Api.orders);
});

module.exports = router;
