var express = require('express');
var router = express.Router();
var UserDao = require('../dao/UserDao');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 根据id获取用户信息
router.get('/:user_id', function (req, res, next) {
  UserDao.getUserById(req, function (results) {
    res.json(results)
  })
});



module.exports = router;