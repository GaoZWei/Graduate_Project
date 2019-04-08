var express = require("express");
var router = express.Router();
var ParamsDao = require("../dao/ParamsDao");

//动作库区
router.get("/exercise_implement", function (req, res, next) {
    ParamsDao.getAllExerciseImplement()
        .then(response => res.json(response));
});


router.get("/exercise_difficult", function (req, res, next) {
    ParamsDao.getAllExerciseDifficulty()
        .then(response => res.json(response));
});

router.get("/exercise_sort", function (req, res, next) {
    ParamsDao.getAllExerciseSort()
        .then(response => res.json(response));
});


//健身计划区
router.get("/plan_aim", function (req, res, next) {
    ParamsDao.getAllPlanAim()
        .then(response => res.json(response));
});

router.get("/plan_days", function (req, res, next) {
    ParamsDao.getAllPlanDays()
        .then(response => res.json(response));
});

router.get("/plan_implement", function (req, res, next) {
    ParamsDao.getAllPlanImplement()
        .then(response => res.json(response));
});
router.get("/plan_body", function (req, res, next) {
    ParamsDao.getAllPlanBody()
        .then(response => res.json(response));
});

module.exports = router;