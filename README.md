# mock-server
#### 安装
```shell
npm install
```
#### 配置
进入config文件夹配置服务器信息
#### 启动
```shell
npm run server
```
#### api
api都在app/api文件夹下。index.js文件加载api文件并
暴露给app。
```javascript
//app/api/index
module.exports = [
  require('./demo/detail'),
  require('./demo/list')
];
```
一个api就是一个BaseApi的实例，实例化时传入一个对象，
并且必须含有route，method，controller三个属性。
controller必须返回一个中间件函数。
```javascript
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
```
#### 静态资源
静态资源放在static目录下

