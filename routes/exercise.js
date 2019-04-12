var express = require("express");
var router = express.Router();
var ExerciseDao = require("../dao/ExerciseDao");

// 获取所有动作
router.get("/", function (req, res, next) {
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


// 将动作添加到定制计划中


module.exports = router;