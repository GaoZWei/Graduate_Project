var pool = require("../db");

// 查询exercise表
function getAllExercise() {
  return new Promise((resolve, reject) => {
    pool.query("select * from exercise_sort,exercise_difficult,exercise where exercise.exercise_sort=exercise_sort.sort_id and exercise.exercise_difficulty=exercise_difficult.difficult_id", [], function (errors, results) {
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
      "select * from exercise_sort,exercise_difficult,exercise,exercise_implement where exercise_id=? and exercise.exercise_sort=exercise_sort.sort_id and exercise.exercise_difficulty=exercise_difficult.difficult_id and exercise.exercise_sort_facility=exercise_implement.exercise_implement_id",
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

// 搜索动作
function SearchExercise(req) {
  return new Promise((resolve, reject) => {
    pool.query("select * from exercise_sort,exercise_difficult,exercise,exercise_implement where exercise_name like ? and exercise.exercise_sort=exercise_sort.sort_id and exercise.exercise_difficulty=exercise_difficult.difficult_id and exercise.exercise_sort_facility=exercise_implement.exercise_implement_id", ['%' + req.query.exercise_name + '%'], function (errors, results) {
      if (results) {
        resolve(results)
      } else {
        reject(errors);
      }
    });
  })
}

//筛选动作
function filterExercise(req) {
  return new Promise((resolve, reject) => {
    var sql = 'select * from exercise_sort,exercise_difficult,exercise,exercise_implement where exercise.exercise_sort=exercise_sort.sort_id and exercise.exercise_difficulty=exercise_difficult.difficult_id and exercise.exercise_sort_facility=exercise_implement.exercise_implement_id';
    if (req.query.exercise_sort !== 'all') {
      sql = sql + ' and exercise_sort = ' + req.query.exercise_sort
    }
    if (req.query.exercise_sort_facility !== 'all') {
      sql = sql + ' and exercise_sort_facility = ' + req.query.exercise_sort_facility
    }
    if (req.query.exercise_difficulty !== 'all') {
      sql = sql + ' and exercise_difficulty = ' + req.query.exercise_difficulty
    }
    // pool.query("SELECT * from exercise where exercise_sort=? and exercise_difficulty=? and exercise_sort_facility=? ", [req.query.exercise_sort, req.query.exercise_difficulty, req.query.exercise_sort_facility],
    pool.query(sql, [],
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

// 将动作添加至定制计划中
function addPersonalPlan(plan_reflect) {
  // return new Promise((resolve, reject) => {
  //     pool.query('INSERT INTO user_plan_reflect (user_id, plan_id) VALUES (?,?)', [plan_reflect.user_id,plan_reflect.plan_id], function (errors, results) {
  //         if (results) {
  //             resolve(results);
  //         } else {
  //             reject(errors);
  //         }
  //     })
  // })
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
module.exports.SearchExercise = SearchExercise;
module.exports.filterExercise = filterExercise;
module.exports.addPersonalPlan = addPersonalPlan;
module.exports.getAllExerciseSort = getAllExerciseSort;