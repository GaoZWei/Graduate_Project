var ParamsDao = require("../dao/ParamsDao");

function getAllExerciseImplement(req, res, next) {
    ParamsDao.getAllExerciseImplement()
        .then(response => res.json(response));
}
function getAllExerciseFixImplement(req, res, next) {
    ParamsDao.getAllExerciseFixImplement()
        .then(response => res.json(response));
}
function getAllExerciseFreeImplement(req, res, next) {
    ParamsDao.getAllExerciseFreeImplement()
        .then(response => res.json(response));
}
function getAllExerciseDifficulty(req, res, next) {
    ParamsDao.getAllExerciseDifficulty()
        .then(response => res.json(response));
}

function getAllExerciseSort(req, res, next) {
    ParamsDao.getAllExerciseSort()
        .then(response => res.json(response));
}
function getAllPlanAim(req, res, next) {
    ParamsDao.getAllPlanAim()
        .then(response => res.json(response));
}
function getAllPlanDays(req, res, next) {
    ParamsDao.getAllPlanDays()
        .then(response => res.json(response));
}
function getAllPlanImplement(req, res, next) {
    ParamsDao.getAllPlanImplement()
        .then(response => res.json(response));
}
function getAllPlanBody(req, res, next) {
    ParamsDao.getAllPlanBody()
        .then(response => res.json(response));
}
module.exports.getAllExerciseImplement = getAllExerciseImplement;
module.exports.getAllExerciseFixImplement = getAllExerciseFixImplement;
module.exports.getAllExerciseFreeImplement = getAllExerciseFreeImplement;
module.exports.getAllExerciseDifficulty = getAllExerciseDifficulty;
module.exports.getAllExerciseSort = getAllExerciseSort;
module.exports.getAllPlanAim = getAllPlanAim;
module.exports.getAllPlanDays = getAllPlanDays;
module.exports.getAllPlanImplement = getAllPlanImplement;
module.exports.getAllPlanBody = getAllPlanBody;

