var express = require("express");
var router = express.Router();
var AdminSelectDao = require("../dao/AdminSelectDao");
var AdminInsertDao = require("../dao/AdminInsertDao");
var AdminDeleteDao = require("../dao/AdminDeleteDao");
var AdminUpdateDao = require("../dao/AdminUpdateDao");
var AdminController = require("../controller/AdminController")

// 获取所有动作
router.get("/select/exercise", AdminController.getAllExercise);
router.get("/select/exercise_difficult", function (req, res, next) {
    AdminSelectDao.getAllExercise_diff()
        .then(response => res.json(response));
});
router.get("/select/exercise_implement", function (req, res, next) {
    AdminSelectDao.getAllExercise_imp()
        .then(response => res.json(response));
});
router.get("/select/exercise_sort", function (req, res, next) {
    AdminSelectDao.getAllExercise_sort()
        .then(response => res.json(response));
});
//获取所有食物
router.get("/select/food", AdminController.getAllFood);
router.get("/select/food_sort", function (req, res, next) {
    AdminSelectDao.getAllFood_sort()
        .then(response => res.json(response));
});
//获取所有健康知识
router.get("/select/health", AdminController.getAllHealth);
router.get("/select/health_sort", function (req, res, next) {
    AdminSelectDao.getAllHealth_sort()
        .then(response => res.json(response));
});
//获取所有健身工具
router.get("/select/implement", AdminController.getAllImplement);
//获取所有计划
router.get("/select/plan", AdminController.getAllPlan);
router.get("/select/plan_aim", function (req, res, next) {
    AdminSelectDao.getAllPlan_aim()
        .then(response => res.json(response));
});
router.get("/select/plan_body", function (req, res, next) {
    AdminSelectDao.getAllPlan_body()
        .then(response => res.json(response));
});
router.get("/select/plan_days", function (req, res, next) {
    AdminSelectDao.getAllPlan_days()
        .then(response => res.json(response));
});
router.get("/select/plan_detail", function (req, res, next) {
    AdminSelectDao.getAllPlan_detail()
        .then(response => res.json(response));
});

router.get("/select/plan_implement", function (req, res, next) {
    AdminSelectDao.getAllPlan_implement()
        .then(response => res.json(response));
});
router.get("/select/plan_body", function (req, res, next) {
    AdminSelectDao.getAllPlan_body()
        .then(response => res.json(response));
});

//删除食物项
router.get('/delete/item1', AdminController.deleteFoodById);
//删除动作项
router.get('/delete/item2', AdminController.deleteExerciseById);
//删除工具项
router.get('/delete/item3', AdminController.deleteImplementById);
//删除健康知识项
router.get('/delete/item4', AdminController.deleteHealthById);
//删除计划项
router.get('/delete/item5', AdminController.deletePlanById);

//更新食物项
router.post('/update/item', AdminController.updateFood);
//添加食物项
router.post('/insert/item', AdminController.insertFood);

//更新动作项
router.post('/update/item1', AdminController.updateExercise);
//添加动作项
router.post('/insert/item1', AdminController.insertExercise);

//更新健康知识项
router.post('/update/item2', AdminController.updateHealth);
//添加健康知识项
router.post('/insert/item2', AdminController.insertHealth);

//更新健身工具项
router.post('/update/item3', AdminController.updateImplement);
//添加健身工具项
router.post('/insert/item3', AdminController.insertImplement);

//更新健身计划项
router.post('/update/item4', AdminController.updatePlan);
//添加健身计划项
router.post('/insert/item4', AdminController.insertPlan);

module.exports = router;