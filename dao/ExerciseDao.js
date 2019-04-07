var pool = require("../db");

// 查询exercise表
function getAllExercise() {
  return new Promise((resolve, reject) => {
    pool.query("select * from exercise", [], function (errors, results) {
      if (results) {
        // var data = new Array();  
        // var row = 0;
        // for(var i=0;i<results.length;i++){
        //   data[row].push(results[i]);
        //   if(i+1 % 4 === 0){
        //       row++;  
        //   }
        // }
        // console.log(data)
        resolve(results);
      } else {
        reject(errors);
      }
    });
  });
}

// 根据id查具体动作
function getExerciseById(req) {
  return new Promise((resolve, reject) => {
    pool.query(
      "select * from exercise where exercise_id=?",
      [req.params.exercise_id],
      function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    );
  })
}

// 取得所有健身动作分类
function getAllExerciseSort() {
  return new Promise((resolve, reject) => {
    pool.query("select * from exercise_sort", [],
      function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    );
  });
}

module.exports.getAllExercise = getAllExercise;
module.exports.getExerciseById = getExerciseById;
module.exports.getAllExerciseSort = getAllExerciseSort;