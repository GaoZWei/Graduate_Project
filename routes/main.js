var express = require("express");
var router = express.Router();
var ExerciseDao = require("../dao/ExerciseDao");
var HealthDao = require("../dao/HealthDao");
var PlanDao = require("../dao/PlanDao");
var FoodDao = require("../dao/FoodDao")


//获取所有热点新闻
router.get("/health/hot", function (req, res, next) {
    HealthDao.getMainHotHealth()
        .then(response => res.json(response));
});

//获取所有健康知识
router.get("/health/health_knowledge", function (req, res, next) {
    HealthDao.getMainHealthKnowledge()
        .then(response => res.json(response));
});

//获取所有计划
router.get("/plan", function (req, res, next) {
    PlanDao.getMainPlan()
        .then(response => res.json(response));
});
// 获取所有主页动作
router.get("/exercise", function (req, res, next) {
    ExerciseDao.getMainExercise()
        .then(response => res.json(response));
});

//获取所有饮食百科
router.get("/health/food_knowledge", function (req, res, next) {
    HealthDao.getMainFoodKnowledge()
        .then(response => res.json(response));
});
//获取所有食物
router.get("/food", function (req, res, next) {
    FoodDao.getMainFood()
        .then(response => res.json(response));
});

module.exports = router;