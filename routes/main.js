var express = require("express");
var router = express.Router();
var MainController = require("../control/MainController");
//获取所有热点新闻
router.get("/health/hot", MainController.getMainHotHealth);

//获取所有健康知识
router.get("/health/health_knowledge", MainController.getMainHealthKnowledge);

//获取所有计划
router.get("/plan", MainController.getMainPlan);

// 获取所有主页动作
router.get("/exercise", MainController.getMainExercise);

//获取所有饮食百科
router.get("/health/food_knowledge", MainController.getMainFoodKnowledge);

//获取所有食物
router.get("/food", MainController.getMainFood);

module.exports = router;