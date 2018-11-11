/* eslint-disable */

/**
 * @file index.js
 * Created by ningwang on 2018/11/8.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('nice work~');
});

module.exports = router;
