var ImplementDao = require("../dao/ImplementDao");

function getAllImplement(req, res, next) {
    ImplementDao.getAllImplement()
        .then(response => res.json(response));
}

function getImplementById(req, res, next) {
    ImplementDao.getImplementById(req)
        .then(response => {
            res.json(response)
        });
}
module.exports.getAllImplement = getAllImplement;
module.exports.getImplementById = getImplementById;