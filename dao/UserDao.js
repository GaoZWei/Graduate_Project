var db = require('../db');

function getUserById(req, callback) {
    db.query('select * from user where user_id=?', [req.params.user_id], function (results, fields) {
        callback(results);
    })
}
module.exports.getUserById = getUserById;