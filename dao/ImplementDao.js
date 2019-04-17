var pool = require("../db");

// 查询exercise表
function getAllImplement() {
  return new Promise((resolve, reject) => {
    pool.query("select * from implement", [], function (errors, results) {
      if (results) {
        resolve(results);
      } else {
        reject(errors);
      }
    });
  });
}

// 根据id查具体动作
function getImplementById(req) {
  return new Promise((resolve, reject) => {
    pool.query(
      "select * from implement where implement_id=?",
      [req.params.implement_id],
      function (errors, results) {
        if (results) {
          resolve(results);
        } else {
          reject(errors);
        }
      }
    );
  })
}

module.exports.getAllImplement = getAllImplement;
module.exports.getImplementById = getImplementById;