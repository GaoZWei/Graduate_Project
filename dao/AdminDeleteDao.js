var pool = require("../db");

// 删除exercise_id
function deleteExerciseById(req) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from exercise where exercise_id=?",
      [req.query.exercise_id],
      function(errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    );
  });
}

// 删除food_id
function deleteFoodById(req) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from food where food_id=?",
      [req.query.food_id],
      function(errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    );
  });
}

// 删除implement_id
function deleteImplementById(req) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from implement where implement_id=?",
      [req.query.implement_id],
      function(errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    );
  });
}

// 删除health_id
function deleteHealthById(req) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from  health where health_id=?",
      [req.query.health_id],
      function(errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    );
  });
}
// 删除health_id
function deletePlanById(req) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from  plan where plan_id=?",
      [req.query.plan_id],
      function(errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    );
  });
}


module.exports.deleteFoodById = deleteFoodById;
module.exports.deleteExerciseById = deleteExerciseById;
module.exports.deleteImplementById = deleteImplementById;
module.exports.deleteHealthById = deleteHealthById;
module.exports.deletePlanById = deletePlanById;