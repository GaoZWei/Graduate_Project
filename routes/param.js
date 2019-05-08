var express = require("express");
var router = express.Router();
var ParamController = require("../controller/ParamController");

//动作库区
router.get("/exercise_implement", ParamController.getAllExerciseImplement);
router.get("/exercise_implement_fix", ParamController.getAllExerciseFixImplement);
router.get("/exercise_implement_free", ParamController.getAllExerciseFreeImplement);
router.get("/exercise_difficult", ParamController.getAllExerciseDifficulty);
router.get("/exercise_sort", ParamController.getAllExerciseSort);
//健身计划区
router.get("/plan_aim", ParamController.getAllPlanAim);
router.get("/plan_days", ParamController.getAllPlanDays);
router.get("/plan_implement",ParamController.getAllPlanImplement);
router.get("/plan_body", ParamController.getAllPlanBody);

module.exports = router;