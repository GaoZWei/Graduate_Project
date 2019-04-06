var pool = require('../db');

function getUserById(req, callback) {
    pool.query('select * from user where user_id=?', [req.params.user_id], function (errors, results) {
        callback(results);
    })
}

function login(account, password) {
    return new Promise((resolve, reject) => {
        pool.query('select * from user where user_account=? AND user_password=?', [account, password], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })

}
module.exports.getUserById = getUserById;
module.exports.login = login;