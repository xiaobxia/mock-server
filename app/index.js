/**
 * Created by xiaobxia on 2017/6/20.
 */
const express = require('express');
const app = express();
let api = require('./api/index');
//得到服务器配置
const config = require('../config/index');
const port = config.port;
const businessName = config.businessName;

api.map(function (item) {
  app[item.method](`/${businessName}/${item.route}`, item.controller());
});

//静态资源
app.use(express.static('static'));

//启动服务器
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  let uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n')
});
