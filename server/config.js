/**
 * @file config.js
 * Created by ningwang on 2018/9/19.
 */

let mdHost = 'https://127.0.0.1:8888';

if (process.env.NODE_ENV === 'production') {
    mdHost = 'http://127.0.0.1:8888';
}

module.exports = {
    mdHost
};
