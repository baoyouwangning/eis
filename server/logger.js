/* eslint-disable */

/**
 * @file logger.js
 * Created by ningwang on 2018/11/8.
 */

const log4js = require('log4js');
const path = require('path');
const productionMode = 'production' === process.env.NODE_ENV;

const configure = {
    appenders: {
        access: {
            type: productionMode ? 'dateFile' : 'console',
            // filename: 'logs/access.log',
            filename: path.resolve(__dirname, '../logs/access.log'),
            pattern: '-yyyy-MM-dd'
        },
        app: {
            type: productionMode ? 'file' : 'console',
            // filename: '../logs/app.log',
            filename: path.resolve(__dirname, '../logs/app.log'),
            maxLogSize: 10485760,
            numBackups: 3
        },
        errorFile: {
            type: productionMode ? 'file' : 'console',
            // filename: 'logs/errors.log',
            filename: path.resolve(__dirname, '../logs/errors.log')
        },
        errors: {
            type: 'logLevelFilter',
            level: 'error',
            appender: 'errorFile'
        }
    },
    categories: {
        default: {
            appenders: ['app', 'errors'],
            level: 'ALL'
        },
        http: {
            appenders: ['access'],
            level: 'ALL'
        }
    }
};

log4js.configure(configure);

module.exports = Object.keys(configure.categories).reduce((previousValue, currentValue, currentIndex) => {
    previousValue[currentValue] = log4js.getLogger(currentValue);

    return previousValue;
}, {});

