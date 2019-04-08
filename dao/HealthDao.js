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
        pool.query('select * from health where health_id=?', [req.params.health_id], function (errors, results) {
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