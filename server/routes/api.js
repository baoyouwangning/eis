/* eslint-disable */

/**
 * @file pageList.js
 * Created by ningwang on 2018/11/10.
 */

const express = require('express');
const router = express.Router();
const xlsx = require('node-xlsx');
const logger = require('../logger').default;
var glob = require("glob");
var multer = require('multer');
var homeDir = require('home-dir');
var storageDir = homeDir('/storage');  //home/root/storage/

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

/* GET home page. */
router.get('/', function (req, res, next) {

    res.status(200).send('你好呀～');
});

//导入Excel，xlsx格式
router.post('/data', async (ctx) => {
    var files = glob.sync('**/*.xlsx', {
        cwd: storageDir
    });

    logger.info(files);

    async function analysisdata() {
        return new Promise((resolve, reject) => {
            //解析xlsx
            let obj = xlsx.parse(xlsxfile);
            resolve(obj);
        });
    }

    async function readdata(v) {
        console.log("xlsx =", v);//xlsx = [ { name: 'Sheet1', data: [ [Array], [Array], [Array] ] } ]
        console.log("数据 = ", v[0]);//数据 =  { name: 'Sheet1',
        //        data: [ [ '姓名', '年龄' ], [ '张三', 20 ], [ '李四', 30 ] ]}
        console.log("要上传的数据 = ", v[0].data);//要上传的数据 =  [ [ '姓名', '年龄' ], [ '张三', 20 ], [ '李四', 30 ] ]
        ctx.body = v;
    }

    let r = await analysisdata();
    r = await readdata(r);
});

router.post('/xlsx', upload.single('file'), function (req, res, next) {
    if (req.file) {
        logger.info(req.file);
        res.json({status: 200, msg: '更新成功～' ,fileList: req.file});
    } else {
        res.status(404).json({status: 404, msg: '更新失败～'});
    }
});


module.exports = router;
