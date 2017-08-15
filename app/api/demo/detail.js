/**
 * Created by xiaobxia on 2017/8/15.
 */
const BaseApi = require('../base');

let demoApi = new BaseApi({
  route: 'demo',
  method: 'get',
  controller: function () {
    let self = this;
    return function (req, res) {
      let data = {
        id: self.randomInt(1, 100),
        name: self.random(['小王', '小陈', '小李'])
      };
      res.json(data);
    };
  }
});

module.exports = demoApi;
