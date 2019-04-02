var db = require('../db');

// 查询plan表
function getPlanById(req,callback) {
    db.query('select * from plan where plan_id=?', [req.params.id], function (results, fields) {
        console.log(results)
        callback(results);
    })
}

module.exports.getPlanById = getPlanById;