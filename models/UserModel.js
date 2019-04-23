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

module.exports.User = User;