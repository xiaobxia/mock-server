/**
 * Created by xiaobxia on 2017/6/20.
 */
const fs = require('fs-extra');
const path = require('path');
const config = require('../../config/index');

module.exports = function (host) {
  if (!host) {
    console.log('host是必填的');
    return false;
  }
  let files = fs.readdirSync(path.join(config.root, 'static/img'));
  let basePath = `${host}/img/`;
  let list = [];
  if (files.length === 0) {
    console.log('static/img下无图片');
  } else {
    list = files.map(function (item) {
      return basePath + item;
    });
  }
  return list;
};
