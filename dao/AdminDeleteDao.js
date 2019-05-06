var pool = require("../db");

// 删除exercise_difficult
function delExercise_diff(Exercise_diff) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from exercise_difficult where difficult_id=?",
      [Exercise_diff.difficult_id],
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

// 删除exercise_implement
function delExercise_imp(Exercise_imp) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from exercise_implement where exercise_implement_id=?",
      [Exercise_imp.exercise_implement_id],
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

// 删除plan_body
function delPlan_body(Plan_body) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from plan_body where body_id=?",
      [Plan_body.body_id],
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

// 删除plan_days
function delPlan_days(Plan_days) {
  return new Promise((resolve, reject) => {
    pool.query(
      "delete from  plan_days where day_id=?",
      [Plan_days.day_id],
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

module.exports.delExercise_diff = delExercise_diff;
module.exports.delExercise_imp = delExercise_imp;
module.exports.deleteFoodById = deleteFoodById;
module.exports.deleteExerciseById = deleteExerciseById;
module.exports.delPlan_body = delPlan_body;
module.exports.delPlan_days = delPlan_days;
