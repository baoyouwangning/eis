/* eslint-disable */

/**
 * @file pageList.js
 * Created by ningwang on 2018/11/10.
 */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.status(200).send('你好～');
});

module.exports = router;
