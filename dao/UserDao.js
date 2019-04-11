var pool = require('../db');

// 获取用户所有信息
function getUserById(req, callback) {
    pool.query('select * from user where user_id=?', [req.params.user_id], function (errors, results) {
        callback(results);
    })
}

// 登录
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

// 注册
function register(user_name, user_account, user_password, user_age, user_sex, user_height, user_weight) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO user (user_name, user_account, user_password, user_age, user_sex, user_height, user_weight) VALUES (?, ?,?, ?,?, ?,?)', [user_name, user_account, user_password, user_age, user_sex, user_height, user_weight], function (errors, results) {
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
module.exports.register = register;