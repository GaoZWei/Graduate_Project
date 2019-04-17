var express = require("express");
var router = express.Router();
var ImplementDao = require("../dao/ImplementDao");

// 获取所有工具
router.get("/", function (req, res, next) {
    ImplementDao.getAllImplement()
        .then(response => res.json(response));
});

// 根据id查询工具
router.get("/:implement_id", function (req, res, next) {
    ImplementDao.getImplementById(req)
        .then(response => {
            res.json(response)
        });
});

module.exports = router;