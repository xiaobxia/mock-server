/**
 * Created by xiaobxia on 2017/8/15.
 */
const lib = require('lodash')
module.exports = class BaseApi {
  /**
   * route
   * method
   * controller
   * @param option
   */
  constructor(option) {
    this.route = option.route;
    this.method = option.method;
    this.controller = option.controller;
  }

  /**
   * 分页函数
   * @param pageIndex
   * @param pageSize
   * @param defaultValue  {pageIndex: 1, pageSize: 10}
   * @returns {{pageIndex: *, pageSize: *, start: number, offset: *}}
   */
  paging(pageIndex, pageSize, defaultValue) {
    let defaultPageIndex = 0,
      defaultPageSize = 0;
    if (defaultValue) {
      defaultPageIndex = defaultValue.pageIndex ? defaultValue.pageIndex : 1;
      defaultPageSize = defaultValue.pageSize ? defaultValue.pageSize : 10;
    }
    //得是个整数
    let pageIndexT = parseInt(pageIndex, 10),
      pageSizeT = parseInt(pageSize, 10),
      index = isNaN(pageIndexT) ? defaultPageIndex : pageIndexT,
      size = isNaN(pageSizeT) ? defaultPageSize : pageSizeT;
    return {
      pageIndex: index,
      pageSize: size,
      start: (index - 1) * size,
      offset: size
    };
  }

  /**
   * 生成list函数
   * @param number
   * @param dataCreateFnc
   * @returns {*}
   */
  createList(number, dataCreateFnc) {
    return lib.times(number, dataCreateFnc);
  }

  /**
   * 得到随机的int
   * @param _start
   * @param _end
   * @returns {number}
   */
  randomInt(_start, _end) {
    let start = _start || 0;
    let end = _end || 100;
    return Math.floor((Math.random() * end) + start);
  }

  /**
   * 随机返回传入数据的其中一个
   * @param dataList
   * @returns {*}
   */
  random(dataList) {
    let len = dataList.length;
    if (len) {
      return dataList[this.randomInt(0, len)];
    }
  }

  /**
   * 改变数组的顺序
   * @param dataList
   */
  changeOrder(dataList) {
    let list = [];
    for (let k = 0, len = dataList.length; k < len; k++) {
      list.push(dataList[k]);
    }
    list.sort(function () {
      return (0.5 - Math.random());
    });
    return list;
  }
};
