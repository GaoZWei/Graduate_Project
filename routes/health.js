var express = require('express');
var router = express.Router();
var HealthDao = require('../dao/HealthDao');

// 获取所有健康信息
router.get('/', function (req, res, next) {
    HealthDao.getAllHealth(res);
});

// 根据id查询详细health信息
router.get('/:health_id', function (req, res, next) {
    HealthDao.getHealthById(req,function(results){
        res.json(results);
    });
});



module.exports = router;