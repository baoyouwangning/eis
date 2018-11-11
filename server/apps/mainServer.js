/**
 * @file mainServer.js
 * Created by ningwang on 2018/9/19.
 */

const http = require('http');
const express = require('express');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
const path = require('path');
const log4js = require('log4js');
const logger = require('../logger').http;
const routes = require('../routes/index');
const apiRoutes = require('../routes/api');

app.set('x-powered-by', false);
app.set('trust proxy', true);

app.use(favicon(path.join(__dirname, '../../public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(compression());

app.use(log4js.connectLogger(logger, {level: log4js.levels.ALL}));

app.use(express.static(path.join(__dirname, '../../dist'), {
    maxAge: '1d',
    setHeaders: (res, path) => {
        const mimeType = express.static.mime.lookup(path);
        if (mimeType === 'text/html') {
            res.setHeader('Cache-Control', 'no-cache');
        } /* else {
            res.sendFile(path);
        } */
    }
}));

// index html
app.use('/', routes);

// api
app.use('/api', apiRoutes);

// 错误处理中间件
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send('Something broke!');
});

const server = app.listen(process.env.PORT || 9090, function (err) {
    if (err) {
        console.log(err);
    }
    const port = server.address().port;
    const host = server.address().address;

    console.log('Listening at %s:%s', host, port);
});
