var pool = require('../db');

//查询food_sort表
function getAllFoodSort() {
    return new Promise((resolve, reject) => {
        pool.query("select * from food_sort", [],
            function (errors, results) {
                if (results) {
                    resolve(results);
                } else {
                    reject(errors)
                }
            });
    });
}

// 根据sort_id查询食物列表
function getFoodBySort(req) {
   
    return new Promise((resolve, reject) => {
        // select * from food where sort_id=?
        pool.query("select * from food,food_sort where food.sort_id=food_sort.sort_id=?", [req.params.sort_id], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}


// 查询food表
function getAllFood(res) {
    db.query('select * from food', [], function (results, fields) {
        res.json(results);
    })

}

module.exports.getAllFoodSort = getAllFoodSort;
module.exports.getAllFood = getAllFood;
module.exports.getFoodBySort = getFoodBySort;