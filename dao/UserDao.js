var pool = require('../db');

// 获取用户所有信息
function getUserById(req, callback) {
    pool.query('select * from user where user_id=?', [req.params.user_id], function (errors, results) {
        callback(results);
    })
}

// 登录
function login(user) {
    return new Promise((resolve, reject) => {
        pool.query('select * from user where user_account=? AND user_password=?', [user.user_account, user.user_password], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}

// 注册
function register(userModel) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO user (user_name, user_account, user_password, user_age, user_sex, user_height, user_weight) VALUES (?, ?,?, ?,?, ?,?)', [userModel.user_name, userModel.user_account, userModel.user_password, userModel.user_age, userModel.user_sex, userModel.user_height, userModel.user_weight], function (errors, results) {
            if (results) {
                resolve(true);
            } else {
                reject(false);
            }
        })
    })
}
// 检查用户名
function checkUserAccount(user_account){
    return new Promise((resolve, reject) => {
        pool.query('select count(user_account) as count from user where user_account=?', [user_account], function (errors, results) {
            if (results) {
                resolve(results[0].count);
            } else {
                reject(results);
            }
        })
    })
}

module.exports.getUserById = getUserById;
module.exports.register = register;
module.exports.login = login;
module.exports.checkUserAccount = checkUserAccount;
