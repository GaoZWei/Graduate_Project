function ExerciseAdd(user_id, exercise_id, plan_day, exercise_groups, exercise_times) {
    this.user_id = user_id;
    this.exercise_id = exercise_id;
    this.plan_day = plan_day;
    this.exercise_groups = exercise_groups;
    this.exercise_times = exercise_times;
}
ExerciseAdd.prototype = {
    constructor: ExerciseAdd
}

module.exports.ExerciseAdd = ExerciseAdd;