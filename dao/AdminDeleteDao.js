var pool = require("../db");

// 删除exercise_difficult
function delExercise_diff(Exercise_diff){
    return new Promise((resolve, reject) => {                     
        pool.query('delete from exercise_difficult where difficult_id=?', [Exercise_diff.difficult_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 删除exercise_implement
function delExercise_imp(Exercise_imp){
    return new Promise((resolve, reject) => {                 
        pool.query('delete from exercise_implement where exercise_implement_id=?', [Exercise_imp.exercise_implement_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 删除exercise_sort
function delExercise_sort(Exercise_sort){
    return new Promise((resolve, reject) => {                 
        pool.query('delete from exercise_sort where sort_id=?', [Exercise_sort.sort_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 删除food_sort
function delFood_sort(Food_sort){
    return new Promise((resolve, reject) => {                 
        pool.query('delete from food_sort where sort_id=?',  [Food_sort.sort_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 删除plan_body
function delPlan_body(Plan_body){
    return new Promise((resolve, reject) => {                 
        pool.query('delete from plan_body where body_id=?', [Plan_body.body_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 删除plan_days
function delPlan_days(Plan_days){
    return new Promise((resolve, reject) => {                 
        pool.query('delete from  plan_days where day_id=?', [Plan_days.day_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

 module.exports.delExercise_diff= delExercise_diff;
 module.exports.delExercise_imp = delExercise_imp;
 module.exports.delFood_sort = delFood_sort;
 module.exports.delExercise_sort = delExercise_sort;
 module.exports.delPlan_body = delPlan_body;
 module.exports.delPlan_days = delPlan_days;