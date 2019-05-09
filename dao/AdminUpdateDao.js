var pool = require("../db");

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
//更新exercise表
function updateExercise(req) {
    var sql = 'update exercise set exercise_name=?, exercise_body_pic=?,exercise_description=?,exercise_difficulty=?,exercise_pic_first=?,exercise_pic_main=?,exercise_pic_second=?,exercise_sort=?,exercise_sort_aim=?,exercise_sort_facility=?,exercise_sort_other=?,exercise_video=?,is_main=? where exercise_id=?'
    var reqParam = [req.body.exercise_name, req.body.exercise_body_pic, req.body.exercise_description, req.body.exercise_difficulty, req.body.exercise_pic_first, req.body.exercise_pic_main, req.body.exercise_pic_second, req.body.exercise_sort, req.body.exercise_sort_aim, req.body.exercise_sort_facility, req.body.exercise_sort_other, req.body.exercise_video, req.body.is_main,req.body.exercise_id]
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


module.exports.updateFood = updateFood;
module.exports.updateExercise = updateExercise;