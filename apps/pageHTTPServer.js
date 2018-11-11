/* eslint-disable */

/**
 * @file pageHTTPServer.js
 * Created by ningwang on 2018/11/8.
 */

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const app = express();
const routes = require('../routes/index');
const apiRoutes = require('../routes/api');
const logger = require('../src/logger').http;
app.set('x-powered-by', false);
app.set('trust proxy', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(log4js.connectLogger(logger, {level: log4js.levels.ALL}));

//index
app.use('/', routes);

// 触发文件更新
app.use('/api', apiRoutes);

//错误处理中间件
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send('Something broke!');
});

const server = app.listen(8185, function (err) {
    if (err) {
        console.log(err);
    }

    const port = server.address().port;
    const host = server.address().address;

    console.log('Listening at %s:%s', host, port);
});
