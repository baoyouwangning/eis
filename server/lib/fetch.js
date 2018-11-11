/* eslint-disable */

/**
 * @file fetch.js
 * Created by ningwang on 2018/11/9.
 */

const request = require('request');
const packageConfig = require("../../package.json");
const ua = `RMBFEHeadless/${packageConfig.version}`;

module.exports = {
    get(url) {
        const moitorData = {
            url: url,
            startTime: Date.now(),
            method: 'get',
            status: 'fail'
        };

        const options = {
            url: url,
            method: 'GET',
            headers: {
                'User-Agent': ua,
            }
        };

        return new Promise((resolve, reject) => {
            request.get(options, (err, resp, body) => {
                moitorData.endTime = Date.now();
                if (err) {
                    return reject(err);
                }
                return resolve(body);
            });
        });
    },

    post(options) {
        const {url} = options;
        const moitorData = {
            url: url,
            startTime: Date.now(),
            method: 'post',
            status: 'fail'
        };
        return new Promise((resolve, reject) => {
                request.post(options, (err, res, body) => {
                    moitorData.endTime = Date.now();
                    if (err) {
                        return reject(err);
                    }
                    return resolve(body);
                });
            }
        );
    }
};
