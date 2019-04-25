function Food_Reflect(user_id,food_id) {
    this.user_id = user_id;
    this.food_id = food_id;
}
Food_Reflect.prototype = {
    constructor: Food_Reflect
}

module.exports.Food_Reflect = Food_Reflect;