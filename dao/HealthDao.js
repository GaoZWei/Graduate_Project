var pool = require('../db');

// 查询health表
function getAllHealth(res) {
    return new Promise((resolve, reject) => {
        pool.query("select * from health", [], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}

// 根据id查询详细health信息
function getHealthById(req) {
    return new Promise((resolve, reject) => {
        pool.query('select * from health,health_sort where health.health_sort=health_sort.sort_id and health.health_id=?', [req.params.health_id], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}

//获取主页热点新闻
function getMainHotHealth(res) {
    return new Promise((resolve, reject) => {
        pool.query("select * from health where is_hot=1", [], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}
//获取主页食物百科
function getMainFoodKnowledge(res) {
    return new Promise((resolve, reject) => {
        pool.query("select * from health where is_food_knowledge=1", [], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}
//获取主页健康知识
function getMainHealthKnowledge(res) {
    return new Promise((resolve, reject) => {
        pool.query("select * from health where is_health=1", [], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    });
}


module.exports.getAllHealth = getAllHealth;
module.exports.getHealthById = getHealthById;
module.exports.getMainHotHealth = getMainHotHealth;
module.exports.getMainFoodKnowledge = getMainFoodKnowledge;
module.exports.getMainHealthKnowledge = getMainHealthKnowledge;