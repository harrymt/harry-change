const trades = require('../trades');

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send(trades);
});

module.exports = router;
