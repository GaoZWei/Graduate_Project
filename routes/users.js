var express = require('express');
var router = express.Router();
var UserDao = require('../dao/UserDao');
var userModel = require("../models/UserModel").User
// router.use(function(req,res,next){
//   res.locals.fun='plan';
//   console.log(res.locals.fun);
//   if(req.session.user&&req.session.user.ident=='1'){
//     next();
//   }else{
//     res.redirect("/");
//   }
// })

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
  UserDao.getUserById(req, function (results) {
    res.json(results)
  })
});

// 登录
router.post("/login", function (req, res, next) {
  var user = new userModel('', req.body.user_account, req.body.user_password, '', '', '', '');
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