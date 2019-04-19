const User = require('./models').User;
const bcrypt = require("bcryptjs");

module.exports = {
    create(newUser, callback){

        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(newUser.password, salt);

        return User.create({
            email: newUser.email,
            password: hashedPassword
        }).then((user) => {
            callback(null, user);
        }).catch((err) => {
            callback(err);
        })
    },
}