function Plan_Reflect(user_id,plan_id) {
    this.user_id = user_id;
    this.plan_id = plan_id;
}
Plan_Reflect.prototype = {
    constructor: Plan_Reflect
}

module.exports.Plan_Reflect = Plan_Reflect;