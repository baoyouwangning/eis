/* eslint-disable */

/**
 * @file pageList.js
 * Created by ningwang on 2018/11/10.
 */

const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const xlsx = require('node-xlsx');
const path = require('path');
const logger = require('../logger').default;
const glob = require("glob");
const multer = require('multer');
const homeDir = require('home-dir');
const storageDir = homeDir('/storage');  //home/root/storage/

var XLSX = require('xlsx');
var micro = require('micro');

var storage = multer.diskStorage({
    destination: storageDir,
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: storage,
    //其他设置请参考multer的limits
    limits: {
        fieldSize: 10000000000
    }
});

router.post('/xlsx', upload.single('file'), function (req, res, next) {
    if (req.file) {
        logger.info(req.file);
        res.json({status: 200, msg: '更新成功～', fileList: req.file});
    } else {
        res.status(404).json({status: 404, msg: '更新失败～'});
    }
});

/* GET home page. */
router.get('/', function (req, res, next) {

    res.status(200).send('你好呀～');
});

router.get('/list', async function (req, res, next) {
    // var listRegex = glob.sync(path.resolve(storageDir, '**/*.xlsx'));
    const files = glob.sync(path.resolve(storageDir, '**/*.xlsx'));
    const xmlURLPrefix = `${req.protocol}://${req.get('host')}/`;

    try {
        var list = await Promise.all(files.map(async (file) => {
            var mtime = await fs.statAsync(file).then(stat => stat.mtime);
            var name = path.relative(storageDir, file);
            var content = await fs.readFileAsync(file).then(data => data.toString());
            var md5 = crypto.createHash('md5');
            md5.update(content);
            const md5Value = md5.digest('hex');

            return {
                name,
                mtime,
                content: md5Value,
                // url: `${xmlURLPrefix}${name.replace(/\.json/, ".xml")}`
                url: `${xmlURLPrefix}?d=${md5Value}`
            }
        }));

        res.json({code: 200, data: list});
    } catch (e) {
        logger.error(e);
        res.json({code: 503, messege: "获取xlsx列表失败"});
    }
});

//导入Excel，xlsx格式
router.get('/data', async function (req, res, next) {
    const xlsxfileList = glob.sync(path.resolve(storageDir, '**/*.xlsx'));
    let xlsxfile = xlsxfileList[0];

    for(let i = 0; i < xlsxfileList.length; i++) {
        const file = xlsxfileList[i];
        var content = await fs.readFileAsync(file).then(data => data.toString());
        var md5 = crypto.createHash('md5');
        md5.update(content);
        const md5Value = md5.digest('hex');

        if (md5Value === req.query.d) {
            xlsxfile = file;
            break;
        }
    }

    // var wb = XLSX.read(xlsxfile, {type: 'buffer'});
    // var wb = XLSX.readFile(xlsxfile);
    // var ws = wb.Sheets[wb.SheetNames[0]];
    // return micro.send(res, 200, JSON.stringify(XLSX.utils.sheet_to_json(ws, {header: 1, raw: true})));

    async function analysisdata() {
        return new Promise((resolve, reject) => {
            //解析xlsx
            let obj = xlsx.parse(xlsxfile);
            resolve(obj);
        });
    }

    async function readdata(v) {
        logger.info("xlsx =", v);//xlsx = [ { name: 'Sheet1', data: [ [Array], [Array], [Array] ] } ]
        logger.info("数据 = ", v[0]);//数据 =  { name: 'Sheet1',
        //        data: [ [ '姓名', '年龄' ], [ '张三', 20 ], [ '李四', 30 ] ]}
        logger.info("要上传的数据 = ", v[0].data);//要上传的数据 =  [ [ '姓名', '年龄' ], [ '张三', 20 ], [ '李四', 30 ] ]
        req.body = v;

        res.json(v[0].data);
    }

    let r = await analysisdata();
    r = await readdata(r);
});

module.exports = router;
