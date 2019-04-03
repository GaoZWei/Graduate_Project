var db = require('../db');

// 查询exercise表
function getAllExercise(res) {
    db.query('select * from exercise', [], function (results, fields) {
        res.json(results);
    })
}

// 根据id查具体动作
function getExerciseById(req, callback) {
    db.query("select * from exercise where exercise_id=?", [req.params.id], function (results, fields) {
        callback(results);
    })
}


// 取得所有健身动作分类
function getAllExerciseSort(res) {
    db.query('select * from exercise_sort', [], function (results, fields) {
        res.json(results);
    })
}

module.exports.getAllExercise = getAllExercise;
module.exports.getExerciseById = getExerciseById;
module.exports.getAllExerciseSort = getAllExerciseSort;