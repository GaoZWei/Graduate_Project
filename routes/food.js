var express = require('express');
var router = express.Router();
var FoodDao = require('../dao/FoodDao');

// 获取食物分类
router.get('/', function (req, res, next) {
  FoodDao.getAllFoodSort()
    .then(response => res.json(response))
});

//模糊查找
router.get(('/search'), function (req, res, next) {
  FoodDao.SearchFood(req)
    .then(response => res.json(response))
})

// 根据食物分类id查询
router.get('/:sort_id', function (req, res, next) {
  FoodDao.getFoodBySort(req)
    .then(response => res.json(response))
});
// 根据食物id查询
router.get('/detail/:food_id', function (req, res, next) {
  FoodDao.getFoodById(req)
    .then(response => res.json(response))
});

//相关食物
router.get('/relate/:food_id', function (req, res, next) {
  FoodDao.getRelateFood(req)
    .then(response => res.json(response))
});



//将食物添加到我的食物列表中

module.exports = router;