/**
 * @file index.js
 * Created by ningwang on 2018/9/19.
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const distRoot = path.resolve(__dirname, '../../dist');

router.get('/', function (req, res) {
    res.sendFile(path.resolve(distRoot, 'index.html'));
});

router.get('/index.html', function (req, res) {
    res.redirect(301, './');
});

router.get('/*', function (req, res) {
    console.log('GET:', req.path);

    var list = req.path.split(/\\|\//); // *nux: /; windows: \;
    var fileName = list[list.length - 1];
    var filePath = path.resolve(distRoot, req.path.replace(/^(\\|\/)/, ''));

    if (-1 === fileName.lastIndexOf('.')) {
        res.sendFile(path.resolve(distRoot, 'index.html'));
    } else if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).type('html').end('nice work~');
    }
});

module.exports = router;
