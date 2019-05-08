var ExerciseDao = require("../dao/ExerciseDao");
var Exercise = require("../models/ExerciseModel")

function getAllExercise(req, res, next) {
    ExerciseDao.getAllExercise()
        .then(response => res.json(response));
}

function SearchExercise(req, res, next) {
    ExerciseDao.SearchExercise(req)
        .then(response => res.json(response))
}

function getExerciseById(req, res, next) {
    ExerciseDao.getExerciseById(req)
        .then(response => {
            res.json(response)
        });
}

function filterExercise(req, res, next) {
    ExerciseDao.filterExercise(req)
        .then(response => {
            res.json(response)
        });
}

function addPersonalPlan(req, res, next) {
    var exercise_add = new Exercise.ExerciseAdd(req.body.user_id, req.body.exercise_id, req.body.plan_day, req.body.exercise_groups, req.body.exercise_times);
    ExerciseDao.addPersonalPlan(exercise_add)
        .then(response => {
            res.json(response)
        });
}
module.exports.getAllExercise = getAllExercise;
module.exports.SearchExercise = SearchExercise;
module.exports.getExerciseById = getExerciseById;
module.exports.filterExercise = filterExercise;
module.exports.addPersonalPlan = addPersonalPlan;