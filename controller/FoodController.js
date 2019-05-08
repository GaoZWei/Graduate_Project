var FoodDao = require('../dao/FoodDao');
var Food = require('../models/FoodModel')

function getAllFoodSort(req, res, next) {
    FoodDao.getAllFoodSort()
        .then(response => res.json(response))
}

function SearchFood(req, res, next) {
    FoodDao.SearchFood(req)
        .then(response => res.json(response))
}

function getFoodBySort(req, res, next) {
    FoodDao.getFoodBySort(req)
        .then(response => res.json(response))
}

function getFoodById(req, res, next) {
    FoodDao.getFoodById(req)
        .then(response => res.json(response))
}

function getRelateFood(req, res, next) {
    FoodDao.getRelateFood(req)
        .then(response => res.json(response))
}
function addFoodList(req, res, next) {
    var food_reflect = new Food.Food_Reflect(req.body.user_id, req.body.food_id);
    FoodDao.addFoodList(food_reflect)
      .then(response => {
        res.json(response)
      });
  }
module.exports.getAllFoodSort = getAllFoodSort;
module.exports.SearchFood = SearchFood;
module.exports.getFoodBySort = getFoodBySort;
module.exports.getFoodById = getFoodById;
module.exports.getRelateFood = getRelateFood;
module.exports.addFoodList = addFoodList;