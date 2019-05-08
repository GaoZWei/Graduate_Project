var PlanDao = require('../dao/planDao');
var Plan=require('../models/PlanModel')

function getAllPlan(req, res, next) {
    PlanDao.getAllPlan()
        .then(response => res.json(response));
}
function SearchPlan(req, res, next) {
    PlanDao.SearchPlan(req)
        .then(response => res.json(response))
}

function getPlanById(req, res, next) {
    PlanDao.getPlanById(req)
        .then(response => {
            res.json(response)
        });
}

function filterPlan(req, res, next) {
    PlanDao.filterPlan(req)
        .then(response => {
            res.json(response)
        });
}

function addCommonPlan(req, res, next) {
    var plan_reflect = new Plan.Plan_Reflect(req.body.user_id, req.body.plan_id);
    PlanDao.addCommonPlan(plan_reflect)
        .then(response => {
            res.json(response)
        });
}
module.exports.getAllPlan = getAllPlan;
module.exports.SearchPlan = SearchPlan;
module.exports.getPlanById = getPlanById;
module.exports.filterPlan = filterPlan;
module.exports.addCommonPlan = addCommonPlan;