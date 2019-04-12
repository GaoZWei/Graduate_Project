var pool = require("../db");

// ---健身动作库相关---
// 取得所有健身的器械
function getAllExerciseImplement() {
    return new Promise((resolve, reject) => {
        pool.query("select * from exercise_implement where exercise_implement_flag=0", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}

function getAllExerciseFixImplement() {
    return new Promise((resolve, reject) => {
        pool.query("select * from exercise_implement where exercise_implement_flag=1", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}

function getAllExerciseFreeImplement() {
    return new Promise((resolve, reject) => {
        pool.query("select * from exercise_implement where exercise_implement_flag=2", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}
//取得所有的健身难度
function getAllExerciseDifficulty() {
    return new Promise((resolve, reject) => {
        pool.query("select * from exercise_difficult", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}
//取得所有锻炼的部位
function getAllExerciseSort() {
    return new Promise((resolve, reject) => {
        pool.query("select * from exercise_sort", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}

// ---健身计划相关---

//取得所有的训练目标
function getAllPlanAim() {
    return new Promise((resolve, reject) => {
        pool.query("select * from plan_aim", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}

//取得所有的训练天数
function getAllPlanDays() {
    return new Promise((resolve, reject) => {
        pool.query("select * from plan_days", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}
//取得所有的训练计划器械要求
function getAllPlanImplement() {
    return new Promise((resolve, reject) => {
        pool.query("select * from plan_implement", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}
//取得所有的训练部位
function getAllPlanBody() {
    return new Promise((resolve, reject) => {
        pool.query("select * from plan_body", [],
            function (errors, results) {
                if (results) {
                    resolve(results)
                } else {
                    reject(errors)
                }
            })
    })
}

module.exports.getAllExerciseImplement = getAllExerciseImplement;
module.exports.getAllExerciseFixImplement = getAllExerciseFixImplement;
module.exports.getAllExerciseFreeImplement = getAllExerciseFreeImplement;
module.exports.getAllExerciseDifficulty = getAllExerciseDifficulty;
module.exports.getAllExerciseSort = getAllExerciseSort;
module.exports.getAllPlanAim = getAllPlanAim;
module.exports.getAllPlanDays = getAllPlanDays;
module.exports.getAllPlanImplement = getAllPlanImplement;
module.exports.getAllPlanBody = getAllPlanBody;