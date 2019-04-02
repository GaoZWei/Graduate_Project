var express = require('express');
var router = express.Router();
var ExerciseDao = require('../dao/ExerciseDao');
/* ---------根路径---------- */
router.get('/', function (req, res, next) {
  ExerciseDao.getAllExercise(res);
});
router.get('/sort', function (req, res, next) {
  ExerciseDao.getAllExerciseSort(res);
});

module.exports = router;