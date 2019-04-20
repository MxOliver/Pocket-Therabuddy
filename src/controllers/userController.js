const userQueries = require('../db/user.queries');
const User = require('../db/models').User;

module.exports = {
    currentUser(req, res, next){
        res.send({ user: req.user.id });
    },
    sign_up(req, res, next){
        let newUser = req.body.user;
        userQueries.create(newUser, (err, user) => {
            if(err){
                res.send({ error: err });
            } else {
                console.log("SUCCESS");
                res.send({ response: user });
            }
        });
    },
    sign_in(req, res, next){
        let checkUser = req.body.user;
        userQueries.authenticate(checkUser, (err, user) => {
            if(err){
                res.send({ error: err });
            } else {
                console.log("SUCCESS");
                res.send({ response: user });
            }
        })
    },
    signOut(req, res, next){
        req.logout();
        req.flash("notice", "You've been successfully signed out.");
        res.send({ response: "success"});
    },
}