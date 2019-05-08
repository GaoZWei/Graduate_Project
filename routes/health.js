var express = require('express');
var router = express.Router();
var HealthController = require('../control/HealthController');

// 获取所有健康信息
router.get('/', HealthController.getAllHealth);

// 根据id查询详细health信息
router.get('/:health_id', HealthController.getHealthById);

module.exports = router;