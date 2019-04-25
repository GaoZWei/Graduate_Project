var express = require('express');
var router = express.Router();
var PlanDao = require('../dao/planDao');
var Plan=require('../models/PlanModel')
// 获取所有计划
router.get("/", function (req, res, next) {
    PlanDao.getAllPlan()
        .then(response => res.json(response));
});
//根据name查询动作
router.get(('/search'), function (req, res, next) {
    PlanDao.SearchPlan(req)
        .then(response => res.json(response))
})

// 根据id查找计划
router.get('/:id', function (req, res, next) {
    PlanDao.getPlanById(req)
        .then(response => {
            res.json(response)
        });
});

// 筛选计划
router.get("/filter/item", function (req, res, next) {
    PlanDao.filterPlan(req)
        .then(response => {
            res.json(response)
        });
});

//将计划添加至公共计划区
router.post("/add/item", function (req, res, next) {
    var plan_reflect = new Plan.Plan_Reflect(req.body.user_id,req.body.plan_id);
    PlanDao.addCommonPlan(plan_reflect)
        .then(response => {
            res.json(response)
        });
});

module.exports = router;