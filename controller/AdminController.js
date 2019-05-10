var AdminSelectDao = require("../dao/AdminSelectDao");
var AdminInsertDao = require("../dao/AdminInsertDao");
var AdminDeleteDao = require("../dao/AdminDeleteDao");
var AdminUpdateDao = require("../dao/AdminUpdateDao");

//获取所有健身动作
function getAllExercise(req, res, next) {
    AdminSelectDao.getAllExercise()
        .then(response => res.json(response));
}
//获取所有食物
function getAllFood(req, res, next) {
    AdminSelectDao.getAllFood()
        .then(response => res.json(response));
}
//获取所有健康知识
function getAllHealth(req, res, next) {
    AdminSelectDao.getAllHealth()
        .then(response => res.json(response));
}
//获取所有器械
function getAllImplement(req, res, next) {
    AdminSelectDao.getAllImplement()
        .then(response => res.json(response));
}
//获取所有健身计划
function getAllPlan(req, res, next) {
    AdminSelectDao.getAllPlan()
        .then(response => res.json(response));
}
//删除食物项
function deleteFoodById(req, res, next) {
    AdminDeleteDao.deleteFoodById(req)
        .then((response) => {
            res.send('ok')
        })
}
//删除动作项
function deleteExerciseById(req, res, next) {
    AdminDeleteDao.deleteExerciseById(req)
        .then((response) => {
            res.send('ok')
        })
}
//删除工具项
function deleteImplementById(req, res, next) {
    AdminDeleteDao.deleteImplementById(req)
        .then((response) => {
            res.send('ok')
        })
}
//删除健康知识项
function deleteHealthById(req, res, next) {
    AdminDeleteDao.deleteHealthById(req)
        .then((response) => {
            res.send('ok')
        })
}
//删除计划项
function deletePlanById(req, res, next) {
    AdminDeleteDao.deletePlanById(req)
        .then((response) => {
            res.send('ok')
        })
}
//更新食物
function updateFood(req, res, next) {
    AdminUpdateDao.updateFood(req)
        .then((response) => {
            res.send('ok')
        })
}
// 添加食物
function insertFood(req, res, next) {
    AdminInsertDao.insertFood(req)
        .then((response) => {
            res.send('ok')
        })
}
//更新动作
function updateExercise(req, res, next) {
    AdminUpdateDao.updateExercise(req)
        .then((response) => {
            res.send('ok')
        })
}
// 添加动作
function insertExercise(req, res, next) {
    AdminInsertDao.insertExercise(req)
        .then((response) => {
            res.send('ok')
        })
}
//更新健康知识
function updateHealth(req, res, next) {
    AdminUpdateDao.updateHealth(req)
        .then((response) => {
            res.send('ok')
        })
}
// 添加健康知识
function insertHealth(req, res, next) {
    AdminInsertDao.insertHealth(req)
        .then((response) => {
            res.send('ok')
        })
}
// 更新健身工具
function updateImplement(req, res, next) {
    AdminUpdateDao.updateImplement(req)
        .then((response) => {
            res.send('ok')
        })
}
// 添加健身工具
function insertImplement(req, res, next) {
    AdminInsertDao.insertImplement(req)
        .then((response) => {
            res.send('ok')
        })
}
//更新健身计划
function updatePlan(req, res, next) {
    AdminUpdateDao.updatePlan(req)
        .then((response) => {
            res.send('ok')
        })
}
// 添加健身计划
function insertPlan(req, res, next) {
    AdminInsertDao.insertPlan(req)
        .then((response) => {
            res.send('ok')
        })
}
// 更新健身计划详情
function updatePlanDetail(req, res, next) {
    AdminUpdateDao.updatePlanDetail(req)
        .then((response) => {
            res.send(response)
        })
}
// 删除健身计划详情
function deletePlanDetail(req, res, next) {
    console.log(313333132)
    AdminDeleteDao.deletePlanDetail(req)
        .then((response) => {
            res.send(response)
        })
}
module.exports.getAllExercise = getAllExercise
module.exports.getAllFood = getAllFood
module.exports.getAllHealth = getAllHealth
module.exports.getAllImplement = getAllImplement
module.exports.getAllPlan = getAllPlan
module.exports.deleteFoodById = deleteFoodById
module.exports.deleteExerciseById = deleteExerciseById
module.exports.deleteImplementById = deleteImplementById
module.exports.deleteHealthById = deleteHealthById
module.exports.deletePlanById = deletePlanById
module.exports.updateFood = updateFood
module.exports.insertFood = insertFood
module.exports.updateExercise = updateExercise
module.exports.insertExercise = insertExercise
module.exports.updateHealth = updateHealth
module.exports.insertHealth = insertHealth
module.exports.updateImplement = updateImplement
module.exports.insertImplement = insertImplement
module.exports.updatePlan = updatePlan
module.exports.insertPlan = insertPlan
module.exports.updatePlanDetail = updatePlanDetail
module.exports.deletePlanDetail = deletePlanDetail