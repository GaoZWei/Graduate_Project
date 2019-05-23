var UserDao = require('../dao/UserDao');
var userModel = require("../models/UserModel")

function checkUserAccount(req, res, next) {
    UserDao.checkUserAccount(req.query.user_account)
        .then((response) => {
            // console.log(response)
            res.send(response.toString()) // response[0] = rowDataPacket
        })
}

function getUserBasicById(req, res, next) {
    result = {
        basicMessage: [],
        commonPlan: [],
        foodList: [],
        personalPlan: [],
    }
    UserDao.getUserBasicById(req)
        .then(UserDao.getUserCommonPlanById)
        .then(UserDao.getUserFoodListById)
        .then(UserDao.getUserPersonalPlanById)
        .then(function (results) {
            result.basicMessage = results[0][0][0]
            result.commonPlan = results[0][0][1]
            result.foodList = results[0][1]
            result.personalPlan = results[1]
            res.json(result)
        })
}

function deleteUserCommonPlanById(req, res, next) {
    UserDao.deleteUserCommonPlanById(req)
        .then((response) => {
            res.send('ok')
        })
}

function deleteUserFoodListById(req, res, next) {
    UserDao.deleteUserFoodListById(req)
        .then((response) => {
            res.send('ok')
        })
}

function deleteUserPersonalPlanById(req, res, next) {
    UserDao.deleteUserPersonalPlanById(req)
        .then((response) => {
            res.send('ok')
        })
}

function updateUserPersonalPlanById(req, res, next) {
    var plan_detail = new userModel.PersonalPlan(req.body.exercise_groups, req.body.exercise_id, req.body.exercise_times, req.body.plan_day, req.body.plan_id, req.body.exercise_id_pre, req.body.plan_id_pre, req.body.plan_day_pre, req.body.exercise_groups_pre, req.body.exercise_times_pre);
    console.log(plan_detail)
    UserDao.updateUserPersonalPlanById(plan_detail)
        .then((response) => {
            res.send('ok')
        })
}

function login(req, res, next) {
    var user = new userModel.User('', req.body.user_account, req.body.user_password, '', '', '', '');
    UserDao.login(user)
        .then((response) => {
            console.log(response);
            if (response[0] == null) {
                res.send('false')
            } else {
                res.json(response[0])
            } // response[0] = rowDataPacket
        })
}

function register(req, res, next) {
    var user = new userModel.User(req.body.user_name, req.body.user_account, req.body.user_password, req.body.user_age, req.body.user_sex, req.body.user_height, req.body.user_weight);
    UserDao.register(user)
        .then((response) => {
            if (response) {
                console.log('true');
            } else {
                console.log('false');
            }
            res.send(response) // response[0] = rowDataPacket
        })
        .catch(() => {
            res.send("false")
        })
}
module.exports.checkUserAccount = checkUserAccount;
module.exports.getUserBasicById = getUserBasicById;
module.exports.deleteUserCommonPlanById = deleteUserCommonPlanById;
module.exports.deleteUserFoodListById = deleteUserFoodListById;
module.exports.deleteUserPersonalPlanById = deleteUserPersonalPlanById;
module.exports.updateUserPersonalPlanById = updateUserPersonalPlanById;
module.exports.login = login;
module.exports.register = register;