/**
 * Created by xiaobxia on 2017/6/20.
 */
const fs = require('fs-extra')

module.exports = function (options) {
    let files = fs.readdirSync('./static/img'),
        len = files.length,
        type = options.type || 'single',
        min = options.min || 1,
        max = options.max || 10,
        basePath = '/img/';
    if (len === 0) {
        console.log('static/img下无图片');
        return '';
    }
    if (type === 'single') {
        let index = Math.floor(Math.random() * len);
        return basePath + files[index];
    } else if (type === 'list') {
        let list = [],
            num = Math.floor((Math.random() * max) + min);
        for (let k = 0; k < num; k++) {
            let index = Math.floor(Math.random() * len);
            list.push(basePath + files[index]);
        }
        return list;
    }
}