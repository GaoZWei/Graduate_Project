var pool = require("../db");

// 查询exercise表
function getAllExercise(res) {
  return new Promise((resolve, reject) => {
    pool.query("select * from exercise", [], function(errors, results) {
      if (results) {
        resolve(results);
      } else {
        reject(errors);
      }
    });
  });
}

// 根据id查具体动作
function getExerciseById(req, callback) {
  pool.query(
    "select * from exercise where exercise_id=?",
    [req.params.exercise_id],
    function(errors, results) {
      callback(results);
    }
  );
}

// 取得所有健身动作分类
function getAllExerciseSort(res) {
  pool.query("select * from exercise_sort", [], function(errors, results) {
    res.json(results);
  });
}

module.exports.getAllExercise = getAllExercise;
module.exports.getExerciseById = getExerciseById;
module.exports.getAllExerciseSort = getAllExerciseSort;
