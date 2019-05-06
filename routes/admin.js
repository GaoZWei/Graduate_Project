var express = require("express");
var router = express.Router();
var AdminSelectDao = require("../dao/AdminSelectDao");
var AdminInsertDao = require("../dao/AdminInsertDao");
var AdminDeleteDao = require("../dao/AdminDeleteDao");
var AdminUpdateDao = require("../dao/AdminUpdateDao");

// 获取所有动作
router.get("/select/exercise", function (req, res, next) {
    AdminSelectDao.getAllExercise()
        .then(response => res.json(response));
});
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
router.get("/select/food", function (req, res, next) {
    AdminSelectDao.getAllFood()
        .then(response => res.json(response));
});
router.get("/select/food_sort", function (req, res, next) {
    AdminSelectDao.getAllFood_sort()
        .then(response => res.json(response));
});
router.get("/select/health", function (req, res, next) {
    AdminSelectDao.getAllHealth()
        .then(response => res.json(response));
});
router.get("/select/health_sort", function (req, res, next) {
    AdminSelectDao.getAllHealth_sort()
        .then(response => res.json(response));
});
router.get("/select/implement", function (req, res, next) {
    AdminSelectDao.getAllImplement()
        .then(response => res.json(response));
});
router.get("/select/plan", function (req, res, next) {
    AdminSelectDao.getAllPlan()
        .then(response => res.json(response));
});
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



module.exports = router;