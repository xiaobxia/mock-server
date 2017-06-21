/**
 * Created by xiaobxia on 2017/6/20.
 */
const express = require('express');
const path = require('path')
const fs = require('fs-extra')
const app = express();

//得到服务器配置
const config = JSON.parse(fs.readFileSync('./serverConfig.json'));
const withSupermanConsole = config.withSupermanConsole;
const port = config.port;
const businessName = config.businessName;

//公司的api
if (withSupermanConsole === true) {
    //基础
    let baseDir = path.resolve(__dirname, './api/company-base');
    fs.readdirSync(baseDir).forEach(function (file) {
        let mock = require(path.resolve(baseDir, file))
        let api = `/${businessName}/${mock.api}`;
        app.get(api, mock.response);
    });
    //扩展
    let extendDir = path.resolve(__dirname, './api/company-base-extend');
    fs.readdirSync(extendDir).forEach(function (file) {
        if (file === 'menuExtend.json') {
            return false;
        }
        let mock = require(path.resolve(extendDir, file))
        let api = `/${businessName}/${mock.api}`;
        app.get(api, mock.response);
    });
}

//业务的api
let businessDir = path.resolve(__dirname, `./api/${businessName}`);
fs.readdirSync(businessDir).forEach(function (file) {
    let mock = require(path.resolve(businessDir, file))
    let api = `/${businessName}/${mock.api}`;
    app.get(api, mock.response);
});

//静态资源
app.use(express.static('static'));

//启动服务器
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
})
