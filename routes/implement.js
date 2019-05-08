var express = require("express");
var router = express.Router();
var ImplementController = require("../controller/ImplementController");

// 获取所有工具
router.get("/", ImplementController.getAllImplement);

// 根据id查询工具
router.get("/:implement_id", ImplementController.getImplementById);

module.exports = router;