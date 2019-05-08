var ExerciseDao = require("../dao/ExerciseDao");
var HealthDao = require("../dao/HealthDao");
var PlanDao = require("../dao/PlanDao");
var FoodDao = require("../dao/FoodDao");

function getMainHotHealth(req, res, next) {
    HealthDao.getMainHotHealth()
        .then(response => res.json(response));
}

function getMainHealthKnowledge(req, res, next) {
    HealthDao.getMainHealthKnowledge()
        .then(response => res.json(response));
}

function getMainPlan(req, res, next) {
    PlanDao.getMainPlan()
        .then(response => res.json(response));
}

function getMainExercise(req, res, next) {
    ExerciseDao.getMainExercise()
        .then(response => res.json(response));
}

function getMainFoodKnowledge(req, res, next) {
    HealthDao.getMainFoodKnowledge()
        .then(response => res.json(response));
}

function getMainFood(req, res, next) {
    FoodDao.getMainFood()
        .then(response => res.json(response));
}
module.exports.getMainHotHealth = getMainHotHealth;
module.exports.getMainHealthKnowledge = getMainHealthKnowledge;
module.exports.getMainPlan = getMainPlan;
module.exports.getMainExercise = getMainExercise;
module.exports.getMainFoodKnowledge = getMainFoodKnowledge;
module.exports.getMainFood = getMainFood;