var express = require("express");
var router = express.Router();
var ExerciseDao = require("../dao/ExerciseDao");
// var exerciseModel = require("../models/ExerciseModel").exercise
// 获取所有动作
router.get("/", function (req, res, next) {
  // exerciseModel.exercise_name = req.body.exercise_name
  // console.log(exerciseModel.exercise_name);
  ExerciseDao.getAllExercise()
    .then(response => res.json(response));
});

//根据name查询动作
router.get(('/search'), function (req, res, next) {
  ExerciseDao.SearchExercise(req)
    .then(response => res.json(response))
})

// 根据id查询动作
router.get("/:exercise_id", function (req, res, next) {
  // ExerciseDao.getExerciseById(req, results => {
  //   res.json(results);
  // });
  // console.log(req.params.exercise_id)
  ExerciseDao.getExerciseById(req)
    .then(response => {
      // console.log(response);
      res.json(response)
    });
});

// 筛选动作
router.get("/filter/item", function (req, res, next) {
  ExerciseDao.filterExercise(req)
    .then(response => {
      console.log(response);
      res.json(response)
    });
});


// 将动作添加到定制计划中
router.post("/add/item", function (req, res, next) {
  // var plan_reflect = new Plan.Plan_Reflect(req.body.user_id,req.body.plan_id);
  // PlanDao.addCommonPlan(plan_reflect)
  //     .then(response => {
  //         res.json(response)
  //     });
});


module.exports = router;