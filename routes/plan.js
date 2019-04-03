var express = require('express');
var router = express.Router();
var PlanDao = require('../dao/planDao');

router.get('/:id', function (req, res, next) {
    console.log(req.params.id)
    PlanDao.getPlanById(req,(results)=>{
        res.send(results)
    });
});
module.exports = router;