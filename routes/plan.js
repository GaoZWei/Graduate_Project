var express = require('express');
var router = express.Router();
var PlanController = require('../controller/PlanController')

// 获取所有计划
router.get("/", PlanController.getAllPlan);

//根据name查询动作
router.get(('/search'), PlanController.SearchPlan)

// 根据id查找计划
router.get('/:id', PlanController.getPlanById);

// 筛选计划
router.get("/filter/item", PlanController.filterPlan);

//将计划添加至公共计划区
router.post("/add/item", PlanController.addCommonPlan);

module.exports = router;