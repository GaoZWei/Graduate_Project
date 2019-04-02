var express = require('express');
var router = express.Router();
//引入数据库封装模块
var db = require('../db');
var result;
/* 主页 */
router.get('/', function (req, res, next) {
  result = {
    id: [],
    name: [],
    sort: [],
    description: []
  }

  // 查询exercise表
  db.query('select * from exercise', [], function (results, fields) {
    // console.log(results);
    result.id[0] = results[0][0];
    result.name[0] = results[0][1];
    console.log(result)
    res.render('index', {
      title: 'Express2',
      result
    });
  })
});
module.exports = router;