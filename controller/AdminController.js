var AdminSelectDao = require("../dao/AdminSelectDao");
var AdminInsertDao = require("../dao/AdminInsertDao");
var AdminDeleteDao = require("../dao/AdminDeleteDao");
var AdminUpdateDao = require("../dao/AdminUpdateDao");

function getAllExercise(req, res, next) {
    AdminSelectDao.getAllExercise()
        .then(response => res.json(response));
}

function getAllFood(req, res, next) {
    AdminSelectDao.getAllFood()
        .then(response => res.json(response));
}
function getAllHealth(req, res, next) {
    AdminSelectDao.getAllHealth()
        .then(response => res.json(response));
}

function getAllImplement(req, res, next) {
    AdminSelectDao.getAllImplement()
        .then(response => res.json(response));
}
function getAllPlan(req, res, next) {
    AdminSelectDao.getAllPlan()
        .then(response => res.json(response));
}
function deleteFoodById(req, res, next) {
    AdminDeleteDao.deleteFoodById(req)
        .then((response) => {
            res.send('ok')
        })
}
function deleteExerciseById(req, res, next) {
    AdminDeleteDao.deleteExerciseById(req)
        .then((response) => {
            res.send('ok')
        })
}
function deleteImplementById(req, res, next) {
    AdminDeleteDao.deleteImplementById(req)
        .then((response) => {
            res.send('ok')
        })
}
function deleteHealthById(req, res, next) {
    AdminDeleteDao.deleteHealthById(req)
        .then((response) => {
            res.send('ok')
        })
}
function deletePlanById(req, res, next) {
    AdminDeleteDao.deletePlanById(req)
        .then((response) => {
            res.send('ok')
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