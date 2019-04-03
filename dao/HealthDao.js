var db = require('../db');

// 查询health表
function getAllHealth(res) {
    db.query('select * from health', [], function (results, fields) {
        res.json(results);
    })
}

// 根据id查询详细health信息
function getHealthById(req, callback) {
    db.query('select * from health where health_id=?', [req.params.health_id], function (results, fields) {
        callback(results);
    })
}


module.exports.getAllHealth = getAllHealth;
module.exports.getHealthById = getHealthById;