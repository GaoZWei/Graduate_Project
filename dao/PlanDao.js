var pool = require("../db");

// 查询所有的plan
function getAllPlan() {
    return new Promise((resolve, reject) => {
        pool.query("select * from plan where plan_creator=999", [], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        });
    });
}

// 查询plan表
function getPlanById(req) {
    var sql1 = "select * from plan where plan_id=" + req.params.id;
    var sql2 = "select * from plan_detail where plan_id=" + req.params.id;
    return new Promise((resolve, reject) => {
        pool.query(sql1 + ";" + sql2 + ";", [], function (errors, results) {
            console.log(results);
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}

// 搜索计划
function SearchPlan(req) {
    return new Promise((resolve, reject) => {
        pool.query("select * from plan where plan_name like ?", ['%' + req.query.plan_name + '%'], function (errors, results) {
            if (results) {
                resolve(results)
            } else {
                reject(errors);
            }
        });
    })
}

//筛选计划
function filterPlan(req) {
    return new Promise((resolve, reject) => {
        var sql = 'SELECT * from plan where 1=1 ';
        if (req.query.plan_aim !== 'all') {
            sql = sql + ' and plan_aim = ' + req.query.plan_aim
        }
        if (req.query.plan_day !== 'all') {
            sql = sql + ' and plan_day = ' + req.query.plan_day
        }
        if (req.query.plan_implement !== 'all') {
            sql = sql + ' and plan_implement = ' + req.query.plan_implement
        }
        if (req.query.plan_body !== 'all') {
            sql = sql + ' and plan_body = ' + req.query.plan_body
        }
        pool.query(sql, [],
            function (errors, results) {
                if (results) {
                    resolve(results);
                } else {
                    reject(errors);
                }
            }
        );
    });
}

//添加公共计划
function addCommonPlan(plan_reflect) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO user_plan_reflect (user_id, plan_id) VALUES (?,?)', [plan_reflect.user_id, plan_reflect.plan_id], function (errors, results) {
            if (results) {
                resolve(results);
            } else {
                reject(errors);
            }
        })
    })
}

// 将plan添加至公共计划区
module.exports.getPlanById = getPlanById;
module.exports.getAllPlan = getAllPlan;
module.exports.SearchPlan = SearchPlan;
module.exports.filterPlan = filterPlan;
module.exports.addCommonPlan = addCommonPlan;