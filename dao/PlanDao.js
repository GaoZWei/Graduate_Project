var pool = require("../db");

// 查询所有的plan
function getAllPlan() {
    return new Promise((resolve, reject) => {
        pool.query("select * from plan", [], function (errors, results) {
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
    return new Promise((resolve, reject) => {
        pool.query('select * from plan where plan_id=?', [req.params.id], function (errors, results) {
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
  

// 将plan添加至公共计划区
module.exports.getPlanById = getPlanById;
module.exports.getAllPlan = getAllPlan;
module.exports.SearchPlan = SearchPlan;