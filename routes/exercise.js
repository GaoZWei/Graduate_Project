var express = require("express");
var router = express.Router();
var ExerciseController = require("../controller/ExerciseController")

// 获取所有动作
router.get("/", ExerciseController.getAllExercise);

//根据name查询动作
router.get(('/search'), ExerciseController.SearchExercise)

// 根据id查询动作
router.get("/:exercise_id", ExerciseController.getExerciseById);

// 筛选动作
router.get("/filter/item", ExerciseController.filterExercise);


// 将动作添加到定制计划中
router.post("/add/item", ExerciseController.addPersonalPlan);


module.exports = router;