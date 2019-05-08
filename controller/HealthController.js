var HealthDao = require("../dao/HealthDao");

function getAllHealth(req, res, next) {
    HealthDao.getAllHealth(res)
        .then(response => res.json(response));
}

function getHealthById(req, res, next) {
    HealthDao.getHealthById(req)
        .then(response => res.json(response));
}
module.exports.getAllHealth = getAllHealth;
module.exports.getHealthById = getHealthById;