var pool = require("../db");

// 查询exercise表
function getAllExercise() {
    return new Promise((resolve, reject) => {
      pool.query("select * from exercise", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询exercise_difficult表
function getAllExercise_diff() {
    return new Promise((resolve, reject) => {
      pool.query("select * from exercise_difficult", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询exercise_implement表
function getAllExercise_imp() {
    return new Promise((resolve, reject) => {
      pool.query("select * from exercise_implement", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询exercise_sort表
function getAllExercise_sort() {
    return new Promise((resolve, reject) => {
      pool.query("select * from exercise_sort", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询food表
function getAllFood() {
    return new Promise((resolve, reject) => {
      pool.query("select * from food", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询food_sort表
function getAllFood_sort() {
    return new Promise((resolve, reject) => {
      pool.query("select * from food_sort", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询health表
function getAllHealth() {
    return new Promise((resolve, reject) => {
      pool.query("select * from health", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询health_sort表
function getAllHealth_sort() {
    return new Promise((resolve, reject) => {
      pool.query("select * from health_sort", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询implement表
function getAllImplement() {
    return new Promise((resolve, reject) => {
      pool.query("select * from implement", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询plan表
function getAllPlan() {
    return new Promise((resolve, reject) => {
      pool.query("select * from plan where plan_creator=999", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询plan_aim表
function getAllPlan_aim() {
    return new Promise((resolve, reject) => {
      pool.query("select * from plan_aim", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询plan_body表
function getAllPlan_body() {
    return new Promise((resolve, reject) => {
      pool.query("select * from plan_body", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询plan_days表
function getAllPlan_days() {
    return new Promise((resolve, reject) => {
      pool.query("select * from plan_days", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询plan_detail表
function getAllPlan_detail() {
    return new Promise((resolve, reject) => {
      pool.query("select * from plan_detail", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询plan_implement表
function getAllPlan_implement() {
    return new Promise((resolve, reject) => {
      pool.query("select * from plan_implement", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询user表
function getAllUser() {
    return new Promise((resolve, reject) => {
      pool.query("select * from user", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

// 查询user_food_reflect表
function getAllUser_food_reflect() {
    return new Promise((resolve, reject) => {
      pool.query("select * from user_food_reflect", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }
// 查询user_plan_reflect表
function getAllUser_plan_reflect() {
    return new Promise((resolve, reject) => {
      pool.query("select * from user_plan_reflect", [], function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      });
    });
  }

  module.exports.getAllExercise = getAllExercise;
  module.exports.getAllExercise_diff = getAllExercise_diff;
  module.exports.getAllExercise_imp = getAllExercise_imp;
  module.exports.getAllExercise_sort = getAllExercise_sort;
  module.exports.getAllFood = getAllFood;
  module.exports.getAllFood_sort = getAllFood_sort;
  module.exports.getAllHealth = getAllHealth;
  module.exports.getAllHealth_sort = getAllHealth_sort;
  module.exports.getAllImplement = getAllImplement;
  module.exports.getAllPlan = getAllPlan;
  module.exports.getAllPlan_aim = getAllPlan_aim;
  module.exports.getAllPlan_body = getAllPlan_body;
  module.exports.getAllPlan_days = getAllPlan_days;
  module.exports.getAllPlan_detail = getAllPlan_detail;
  module.exports.getAllPlan_implement = getAllPlan_implement;
  module.exports.getAllUser = getAllUser;
  module.exports.getAllUser_food_reflect = getAllUser_food_reflect;
  module.exports.getAllUser_plan_reflect = getAllUser_plan_reflect;








