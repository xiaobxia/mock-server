/**
 * Created by xiaobxia on 2017/8/15.
 */
const BaseApi = require('../base');
const getImage = require('../../../util/dataGenerator/img');

let demoApi = new BaseApi({
  route: 'demoList',
  method: 'get',
  controller: function () {
    let self = this;
    return function (req, res) {
      let page = self.paging(req.query.pageIndex, req.query.pageSize);
      let data = self.createList(page.pageSize, function (index) {
        return {
          id: page.start + index,
          name: self.random(['小王', '小陈', '小李']),
          pic: self.changeOrder(getImage('http://localhost:8080'))
        };
      });
      res.json(data);
    };
  }
});

module.exports = demoApi;
