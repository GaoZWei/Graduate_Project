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
//获取主页所有食物
function getMainFood(req) {
    return new Promise((resolve, reject) => {
        pool.query("select * from food where is_main=1", [], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}
// 根据sort_id查询食物列表
function getFoodBySort(req) {
    return new Promise((resolve, reject) => {
        // select * from food where sort_id=?
        pool.query("select * from food where sort_id=?", [req.params.sort_id], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}

// 根据food_id查询食物列表
function getFoodById(req) {
    return new Promise((resolve, reject) => {
        pool.query("select * from food,food_sort where food.sort_id=food_sort.sort_id and food.food_id=?", [req.params.food_id], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}

//根据food_it查sort_id的相关食物
function getRelateFood(req) {
    return new Promise((resolve, reject) => {
        pool.query("select * from food where sort_id in (select sort_id from food where food_id = ?) and food_id!= ?", [req.params.food_id, req.params.food_id], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}

// 搜索食物
function SearchFood(req) {
    return new Promise((resolve, reject) => {
        pool.query("select * from food where food_name like ?", ['%' + req.query.food_name + '%'], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    })
}

//添加食物列表
function addFoodList(food_reflect){
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO user_food_reflect (user_id, food_id) VALUES (?,?)', [food_reflect.user_id,food_reflect.food_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}

// 查询food表
function getAllFood(res) {
    db.query('select * from food', [], function (results, fields) {
        res.json(results);
    })

}

module.exports.getAllFoodSort = getAllFoodSort;
module.exports.getMainFood = getMainFood;
module.exports.getFoodBySort = getFoodBySort;
module.exports.getFoodById = getFoodById;
module.exports.getRelateFood = getRelateFood;
module.exports.SearchFood = SearchFood;
module.exports.addFoodList = addFoodList;
module.exports.getAllFood = getAllFood;