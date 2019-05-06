var pool = require("../db");

// 添加exercise_difficult
function addExercise_diff(Exercise_diff){
    return new Promise((resolve, reject) => {                     
        pool.query('INSERT INTO exercise_difficult (difficult_id, difficult_name) SELECT MAX(difficult_id)+1,? FROM exercise_difficult', [Exercise_diff.difficult_name], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 添加exercise_implement
function addExercise_imp(Exercise_imp){
    return new Promise((resolve, reject) => {                 
        pool.query('INSERT INTO exercise_implement (exercise_implement_id, exercise_implement_name, exercise_implement_flag) SELECT MAX(exercise_implement_id)+1,?,?FROM exercise_implement', [Exercise_imp.exercise_implement_name,Exercise_imp.exercise_implement_flag], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 添加exercise_sort
function addExercise_sort(Exercise_sort){
    return new Promise((resolve, reject) => {                 
        pool.query('INSERT INTO exercise_sort (sort_id, sort_name) SELECT MAX(sort_id)+1,? FROM exercise_sort', [Exercise_sort.sort_name], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 添加food_sort
function addFood_sort(Food_sort){
    return new Promise((resolve, reject) => {                 
        pool.query('INSERT INTO food_sort (sort_id,sort_name,sort_description,sort_pic) SELECT MAX(sort_id)+1,?,?,null FROM food_sort', [Food_sort.sort_name,Food_sort.sort_description], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 添加plan_body
function addPlan_body(Plan_body){
    return new Promise((resolve, reject) => {                 
        pool.query('INSERT INTO plan_body (body_id,body_name) SELECT MAX(body_id)+1,? FROM plan_body', [Plan_body.body_name], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

// 添加plan_days
function addPlan_days(Plan_days){
    return new Promise((resolve, reject) => {                 
        pool.query('INSERT INTO plan_days (day_id,day_name) SELECT MAX(day_id)+1,? FROM plan_days', [Plan_days.day_name], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
 }

 module.exports.addExercise_diff= addExercise_diff;
 module.exports.addExercise_imp = addExercise_imp;
 module.exports.addFood_sort = addFood_sort;
 module.exports.addExercise_sort = addExercise_sort;
 module.exports.addPlan_body = addPlan_body;
 module.exports.addPlan_days = addPlan_days;