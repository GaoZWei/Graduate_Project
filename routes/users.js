var express = require('express');
var router = express.Router();
var UserDao = require('../dao/UserDao');
var userModel = require("../models/UserModel")
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//校验用户名
router.get("/checkUserAccount", function (req, res, next) {
  UserDao.checkUserAccount(req.query.user_account)
    .then((response) => {
      // console.log(response)
      res.send(response.toString()) // response[0] = rowDataPacket
    })
})

// 根据id获取用户信息
router.get('/:user_id', function (req, res, next) {
  result = {
    basicMessage: [],
    commonPlan: [],
    foodList: [],
    personalPlan: [],
  }
  UserDao.getUserBasicById(req)
    .then(UserDao.getUserCommonPlanById)
    .then(UserDao.getUserFoodListById)
    .then(UserDao.getUserPersonalPlanById)
    .then(function (results) {
      result.basicMessage = results[0][0][0]
      result.commonPlan = results[0][0][1]
      result.foodList = results[0][1]
      result.personalPlan = results[1]
      res.json(result)
    })
});

//删除公共计划
router.get('/delete/item', function (req, res, next) {
  UserDao.deleteUserCommonPlanById(req)
    .then((response) => {
      res.send('ok')
    })
});

//删除食物列表
router.get('/delete/item1', function (req, res, next) {
  UserDao.deleteUserFoodListById(req)
    .then((response) => {
      res.send('ok')
    })
});

//删除定制计划
router.get('/delete/item2', function (req, res, next) {
  UserDao.deleteUserPersonalPlanById(req)
    .then((response) => {
      res.send('ok')
    })
});

//修改定制计划
router.post('/update/item', function (req, res, next) {
  var plan_detail = new userModel.PersonalPlan(req.body.exercise_groups, req.body.exercise_id, req.body.exercise_times, req.body.plan_day, req.body.plan_id);
  UserDao.updateUserPersonalPlanById(plan_detail)
    .then((response) => {
      res.send('ok')
    })
});

// 登录
router.post("/login", function (req, res, next) {
  var user = new userModel.User('', req.body.user_account, req.body.user_password, '', '', '', '');
  UserDao.login(user)
    .then((response) => {
      console.log(response);
      if (response[0] == null) {
        res.send('false')
      } else {
        res.json(response[0])
      } // response[0] = rowDataPacket
    })
})

// 注册
router.post("/register", function (req, res, next) {
  var user = new userModel(req.body.user_name, req.body.user_account, req.body.user_password, req.body.user_age, req.body.user_sex, req.body.user_height, req.body.user_weight);
  UserDao.register(user)
    .then((response) => {
      if (response) {
        console.log('true');
      } else {
        console.log('false');
      }
      res.send(response) // response[0] = rowDataPacket
    })
    .catch(() => {
      res.send("false")
    })
})


module.exports = router;