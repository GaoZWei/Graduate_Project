var pool = require('../db');


// 将获取用户基本信息
function getUserBasicById(req) {
    return new Promise((resolve, reject) => {
        var sql1 = 'select count(food_id) as food_num from user_food_reflect where user_id=?';
        var sql2 = 'select count(plan_id) as common_plan_num from user_plan_reflect where user_id=?';
        var sql3 = 'UPDATE user SET user_common_plan =?, user_food_list = ? WHERE user_id = ?';
        var sql4 = 'select * from user where user_id=?'
        pool.query(sql1 + ';' + sql2 + ';', [req.params.user_id, req.params.user_id], function (errors, results) {
            var food_num = results[0][0].food_num;
            var common_plan_num = results[1][0].common_plan_num;
            pool.query(sql3, [common_plan_num, food_num, req.params.user_id], function (errors, results) {
                pool.query(sql4, [req.params.user_id], function (errors, results) {
                    if (results) {
                        resolve(results);
                    } else {
                        reject(errors);
                    }
                })
            })
        })
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
function checkUserAccount(user_account) {
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

module.exports.getUserBasicById = getUserBasicById;
module.exports.register = register;
module.exports.login = login;
module.exports.checkUserAccount = checkUserAccount;