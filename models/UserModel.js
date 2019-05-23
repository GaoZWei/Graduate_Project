function User(user_name, user_account, user_password, user_age, user_sex, user_height, user_weight) {
    this.user_name = user_name;
    this.user_account = user_account;
    this.user_password = user_password;
    this.user_age = user_age;
    this.user_sex = user_sex;
    this.user_height = user_height;
    this.user_weight = user_weight;
}
User.prototype = {
    constructor: User
}

function PersonalPlan(exercise_groups, exercise_id, exercise_times, plan_day, plan_id, exercise_id_pre, plan_id_pre, plan_day_pre, exercise_groups_pre, exercise_times_pre) {
    this.exercise_groups = exercise_groups
    this.exercise_id = exercise_id
    this.exercise_times = exercise_times
    this.plan_day = plan_day
    this.plan_id = plan_id
    this.exercise_id_pre = exercise_id_pre
    this.plan_id_pre = plan_id_pre
    this.plan_day_pre = plan_day_pre
    this.exercise_groups_pre = exercise_groups_pre
    this.exercise_times_pre = exercise_times_pre
}
PersonalPlan.prototype = {
    constructor: PersonalPlan
}

module.exports.User = User;
module.exports.PersonalPlan = PersonalPlan;