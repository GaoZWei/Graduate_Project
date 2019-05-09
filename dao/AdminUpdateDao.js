var pool = require("../db");

// 更新exercise_difficult
function updateExercise_diff(Exercise_diff) {
    return new Promise((resolve, reject) => {
        pool.query('update exercise_difficult set difficult_name=? where difficult_id=?', [Exercise_diff.difficult_name, Exercise_diff.difficult_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}

// 更新exercise_implement
function updateExercise_imp(Exercise_imp) {
    return new Promise((resolve, reject) => {
        pool.query('update exercise_implement set exercise_implement_name=?, exercise_implement_flag=? where exercise_implement_id=?', [Exercise_imp.exercise_implement_name, Exercise_imp.exercise_implement_flag, Exercise_imp.exercise_implement_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}

// 更新exercise_sort
function updateExercise_sort(Exercise_sort) {
    return new Promise((resolve, reject) => {
        pool.query('update exercise_sort set sort_name=? where sort_id=?', [Exercise_sort.sort_name, Exercise_sort.sort_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}

// 更新food_sort
function updateFood_sort(Food_sort) {
    return new Promise((resolve, reject) => {
        pool.query('update food_sort set sort_name=?,sort_description=?,sort_pic=? where sort_id=?',
            [Food_sort.sort_name, Food_sort.sort_description, Food_sort.sort_pic, Food_sort.sort_id],
            function (errors, results) {
                if (results) {
                    resolve(results);
                } else {
                    reject(errors);
                }
            })
    })
}

// 更新plan_body
function updatePlan_body(Plan_body) {
    return new Promise((resolve, reject) => {
        pool.query('update plan_body set body_name=? where body_id=?', [Plan_body.body_name, Plan_body.body_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}



//更新food表
function updateFood(req) {
    var sql = "update food set food_name=?, sort_id=? ,food_pic=?,food_hots=?,food_protein=?,protein_account=?,food_carbohydrate=?,carbohydrate_account=?,food_fat=?,fat_account=?,measure_unit=?,measure_calorie=?,food_description=?,is_main=? where food_id=?"
    var reqParam = [req.body.food_name, req.body.sort_id, req.body.food_pic, req.body.food_hots, req.body.food_protein, req.body.protein_account, req.body.food_carbohydrate, req.body.carbohydrate_account, req.body.food_fat, req.body.fat_account, req.body.measure_unit, req.body.measure_calorie, req.body.food_description, req.body.is_main, req.body.food_id]
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




module.exports.updateExercise_diff = updateExercise_diff;
module.exports.updateExercise_imp = updateExercise_imp;
module.exports.updateFood_sort = updateFood_sort;
module.exports.updateExercise_sort = updateExercise_sort;
module.exports.updatePlan_body = updatePlan_body;

module.exports.updateFood = updateFood;