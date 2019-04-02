var db = require('../db');

// 查询exercise表
function getAllExercise(res) {
    db.query('select * from exercise', [], function (results, fields) {
        res.json(results);
    })
}
// 取得所有健身动作分类
function getAllExerciseSort(res){
    db.query('select * from exercise_sort', [], function (results, fields) {
        res.json(results);
    })
}

module.exports.getAllExercise = getAllExercise;
module.exports.getAllExerciseSort = getAllExerciseSort;