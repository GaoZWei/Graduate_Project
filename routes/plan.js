var express = require('express');
var router = express.Router();
var PlanDao = require('../dao/planDao');
/* ---------请求plan列表页面路径---------- */
router.get("/", function (req, res, next) {
    PlanDao.getAllPlan()
        .then(response => res.json(response));
});
// 根据id查找计划
router.get('/:id', function (req, res, next) {
    PlanDao.getPlanById(req)
        .then(response => {
            res.json(response)
        });
});
module.exports = router;