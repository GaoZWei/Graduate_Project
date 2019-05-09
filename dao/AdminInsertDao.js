var pool = require("../db");

// 添加食物
function insertFood(req) {
    var sql = 'insert into food (food_name, sort_id ,food_pic,food_hots,food_protein,protein_account,food_carbohydrate,carbohydrate_account,food_fat,fat_account,measure_unit,measure_calorie,food_description,is_main) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var reqParam = [req.body.food_name, req.body.sort_id, req.body.food_pic, req.body.food_hots, req.body.food_protein, req.body.protein_account, req.body.food_carbohydrate, req.body.carbohydrate_account, req.body.food_fat, req.body.fat_account, req.body.measure_unit, req.body.measure_calorie, req.body.food_description, req.body.is_main]
    return new Promise((resolve, reject) => {
        pool.query(sql, reqParam, function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}
// 添加健身动作
function insertExercise(req) {
    var sql = 'insert into exercise (exercise_name, exercise_body_pic,exercise_description,exercise_difficulty,exercise_pic_first,exercise_pic_main,exercise_pic_second,exercise_sort,exercise_sort_aim,exercise_sort_facility,exercise_sort_other,exercise_video,is_main) values (?,?,?,?,?,?,?,?,?,?,?,?,?)'
    var reqParam = [req.body.exercise_name, req.body.exercise_body_pic, req.body.exercise_description, req.body.exercise_difficulty, req.body.exercise_pic_first, req.body.exercise_pic_main, req.body.exercise_pic_second, req.body.exercise_sort, req.body.exercise_sort_aim, req.body.exercise_sort_facility, req.body.exercise_sort_other, req.body.exercise_video,req.body.is_main]
    return new Promise((resolve, reject) => {
        pool.query(sql, reqParam, function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}
// 添加健康知识
function insertHealth(req) {
    var sql = 'insert into food (food_name, sort_id ,food_pic,food_hots,food_protein,protein_account,food_carbohydrate,carbohydrate_account,food_fat,fat_account,measure_unit,measure_calorie,food_description,is_main) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var reqParam = [req.body.food_name, req.body.sort_id, req.body.food_pic, req.body.food_hots, req.body.food_protein, req.body.protein_account, req.body.food_carbohydrate, req.body.carbohydrate_account, req.body.food_fat, req.body.fat_account, req.body.measure_unit, req.body.measure_calorie, req.body.food_description, req.body.is_main]
    return new Promise((resolve, reject) => {
        pool.query(sql, reqParam, function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}
// 添加健身工具
function insertImplement(req) {
    var sql = 'insert into food (food_name, sort_id ,food_pic,food_hots,food_protein,protein_account,food_carbohydrate,carbohydrate_account,food_fat,fat_account,measure_unit,measure_calorie,food_description,is_main) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var reqParam = [req.body.food_name, req.body.sort_id, req.body.food_pic, req.body.food_hots, req.body.food_protein, req.body.protein_account, req.body.food_carbohydrate, req.body.carbohydrate_account, req.body.food_fat, req.body.fat_account, req.body.measure_unit, req.body.measure_calorie, req.body.food_description, req.body.is_main]
    return new Promise((resolve, reject) => {
        pool.query(sql, reqParam, function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}
// 添加健身计划
function insertPlan(req) {
    var sql = 'insert into food (food_name, sort_id ,food_pic,food_hots,food_protein,protein_account,food_carbohydrate,carbohydrate_account,food_fat,fat_account,measure_unit,measure_calorie,food_description,is_main) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var reqParam = [req.body.food_name, req.body.sort_id, req.body.food_pic, req.body.food_hots, req.body.food_protein, req.body.protein_account, req.body.food_carbohydrate, req.body.carbohydrate_account, req.body.food_fat, req.body.fat_account, req.body.measure_unit, req.body.measure_calorie, req.body.food_description, req.body.is_main]
    return new Promise((resolve, reject) => {
        pool.query(sql, reqParam, function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}



module.exports.insertFood = insertFood;
module.exports.insertHealth = insertHealth;
module.exports.insertExercise = insertExercise;
module.exports.insertImplement = insertImplement;
module.exports.insertPlan = insertPlan;