const User = require('./models').User;
const bcrypt = require("bcryptjs");
const authHelper = require("../auth/helper");

module.exports = {
    create(newUser, callback){

        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(newUser.password, salt);

        return User.create({
            name: newUser.name,
            email: newUser.email,
            password: hashedPassword
        }).then((user) => {
            callback(null, user);
        }).catch((error) => {
            callback(error);
        })
    },
    authenticate(checkUser, callback){
        let email = checkUser.email;
        let password = checkUser.password;
        User.findOne({ where: { email }}).then((user) => {
            if(!user || !authHelper.comparePass(password, user.password)) {
                callback("not found");
            } else {
                callback(null, user);
            }
        });
    }
}