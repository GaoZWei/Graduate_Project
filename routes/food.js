var express = require('express');
var router = express.Router();
var FoodDao = require('../dao/FoodDao');

// 获取食物分类
router.get('/', function (req, res, next) {
  FoodDao.getAllFoodSort(res);
});

// 根据食物分类id查询
router.get('/:sort_id', function (req, res, next) {
  FoodDao.getFoodBySort(req, (results) => {
    res.send(results)
  });
});
module.exports = router;