var db = require('../db');

// 查询exercise表
function getAllExercise(res) {
    db.query('select * from exercise', [], function (results, fields) {
        res.json(results);
    })
}

module.exports.getAllExercise = getAllExercise;