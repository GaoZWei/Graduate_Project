var express = require('express');
var router = express.Router();
var FoodController = require("../control/FoodController")
// 获取食物分类
router.get('/', FoodController.getAllFoodSort);

//模糊查找
router.get(('/search'), FoodController.SearchFood)

// 根据食物分类id查询
router.get('/:sort_id', FoodController.getFoodBySort);

// 根据食物id查询
router.get('/detail/:food_id', FoodController.getFoodById);

//相关食物
router.get('/relate/:food_id', FoodController.getRelateFood);

//将食物添加到我的食物列表中
router.post("/add/item", FoodController.addFoodList);

module.exports = router;