var express = require('express');
var router = express.Router();
var UserController = require("../control/UserController")

//校验用户名
router.get("/checkUserAccount", UserController.checkUserAccount)

// 根据id获取用户信息
router.get('/:user_id', UserController.getUserBasicById);

//删除公共计划
router.get('/delete/item', UserController.deleteUserCommonPlanById);

//删除食物列表
router.get('/delete/item1', UserController.deleteUserFoodListById);

//删除定制计划
router.get('/delete/item2', UserController.deleteUserPersonalPlanById);

//修改定制计划
router.post('/update/item', UserController.updateUserPersonalPlanById);

// 登录
router.post("/login", UserController.login)

// 注册
router.post("/register", UserController.register)


module.exports = router;