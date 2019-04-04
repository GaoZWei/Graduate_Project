var express = require('express');
var router = express.Router();
var ExerciseDao = require('../dao/ExerciseDao');
/* ---------请求exercise页面路径---------- */
router.get('/', function (req, res, next) {
  ExerciseDao.getAllExercise(res)
  // .then(console.log)
  // .then(res.send('get blogs success'));
  // res.send('get blogs success')
});

// ----------根据id查询动作详情-------------
router.get('/:exercise_id', function (req, res, next) {
  ExerciseDao.getExerciseById(req, (results) => {
    res.json(results);
  });
});




module.exports = router;