/**
 * Created by xiaobxia on 2017/6/20.
 */
const requst = require('../../util/requst')
const response = require('../../util/response')
const dataG = require('../../util/data-generator/index')
module.exports = {
    api: 'test',
    response: function (req, res) {
        let total = 100;
        let paging = requst.pageParse(req, total)
        let data = response.pageCreate(total,paging.page,paging.size, dataG.img({
            dir: 'img',
            type: 'list',
            min: 1,
            max: 5
        }));
        res.json(data)
    }
};
