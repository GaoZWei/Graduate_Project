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

//获取用户的公共计划
function getUserCommonPlanById(req) {
    return new Promise((resolve, reject) => {
        var sql1 = 'select * from plan where plan_id in (select distinct plan_id from user_plan_reflect where user_id = ?)';
        pool.query(sql1, [req[0].user_id, req[0].user_id], function (errors, results) {
            if (results) {
                resolve([req, results]);
            } else {
                reject(errors);
            }
        })
    })
}
//删除用户的公共计划
function deleteUserCommonPlanById(req) {
    return new Promise((resolve, reject) => {
        var sql1 = 'DELETE from user_plan_reflect where user_id=? and plan_id=?';
        pool.query(sql1, [req.query.user_id, req.query.plan_id], function (errors, results) {
            if (results) {
                resolve('ok');
            } else {
                reject(errors);
            }
        })
    })
}
//获取用户的定制计划
function getUserPersonalPlanById(req) {
    return new Promise((resolve, reject) => {
        // var sql1 = 'SELECT * from plan_detail where plan_id in (select plan_id from plan where plan_creator=?)';
        // var sql2 = "SELECT * from plan_detail left JOIN exercise on plan_detail.exercise_id=exercise.exercise_id  where plan_id in (select plan_id from plan where plan_creator=?) "
        var sql3 = "SELECT * ,group_concat(plan_detail.exercise_id) as group_exercise_id,group_concat(exercise.exercise_name)  as group_exercise_name ,group_concat(plan_detail.exercise_groups) as group_exercise_group,group_concat(plan_detail.exercise_times) as group_exercise_times from plan_detail left JOIN exercise on plan_detail.exercise_id=exercise.exercise_id  where plan_id in (select plan_id from plan where plan_creator=?) GROUP by plan_day"
        pool.query(sql3, [req[0][0][0].user_id], function (errors, results) {
            if (results) {
                resolve([req, results]);
            } else {
                reject(errors);
            }
        })
    })
}
//获取用户的食物清单
function getUserFoodListById(req) {
    // console.log(req[0][0].user_id);
    return new Promise((resolve, reject) => {
        var sql1 = 'select * from food where food_id in (select distinct food_id from user_food_reflect where user_id = ?)';
        pool.query(sql1, [req[0][0].user_id, req[0][0].user_id], function (errors, results) {
            if (results) {
                resolve([req, results]);
            } else {
                reject(errors);
            }
        })
    })
}

//删除用户的食物清单
function deleteUserFoodListById(req) {
    return new Promise((resolve, reject) => {
        var sql1 = 'DELETE from user_food_reflect where user_id=? and food_id=?';
        pool.query(sql1, [req.query.user_id, req.query.food_id], function (errors, results) {
            if (results) {
                resolve('ok');
            } else {
                reject(errors);
            }
        })
    })
}

//删除用户的定制计划
function deleteUserPersonalPlanById(req) {
    console.log(req.query);
    return new Promise((resolve, reject) => {
        var sql1 = 'delete FROM plan_detail where plan_id=? and exercise_id=?';
        pool.query(sql1, [req.query.plan_id, req.query.exercise_id], function (errors, results) {
            if (results) {
                resolve('ok');
            } else {
                reject(errors);
            }
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
module.exports.getUserCommonPlanById = getUserCommonPlanById;
module.exports.deleteUserCommonPlanById = deleteUserCommonPlanById;
module.exports.getUserPersonalPlanById = getUserPersonalPlanById;
module.exports.deleteUserPersonalPlanById = deleteUserPersonalPlanById;
module.exports.getUserFoodListById = getUserFoodListById;
module.exports.deleteUserFoodListById = deleteUserFoodListById;
module.exports.register = register;
module.exports.login = login;
module.exports.checkUserAccount = checkUserAccount;