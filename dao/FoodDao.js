var db = require('../db');

// 查询food表
function getAllFood(res) {
    db.query('select * from food', [], function (results, fields) {
        res.json(results);
    })
}
//查询food_sort表
function getAllFoodSort(res) {
    db.query('select * from food_sort', [], function (results, fields) {
        res.json(results);
    })
}
// 根据sort_id查询食物列表
function getFoodBySort(req,callback) {
    db.query('select * from food where sort_id=?', [req.params.sort_id], function (results, fields) {
        callback(results);
    })
}

module.exports.getAllFood = getAllFood;
module.exports.getAllFoodSort = getAllFoodSort;
module.exports.getFoodBySort = getFoodBySort;