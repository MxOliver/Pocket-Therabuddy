const userQueries = require('../db/user.queries');
const User = require('../db/models').User;
const passport = require("passport");

module.exports = {
    currentUser(){
        res.send({ user: req.user.id });
    },
    sign_up(req, res, next){
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body.passwordConfirmation
        };

        userQueries.create(newUser, (err, user) => {
            if(err){
                req.flash(err);
                res.send({ error: err });
            } else {
                passport.authenticate("local")(req, res, () => {
                    req.flash('notice', "Account successfully created");
                    res.send({ response: req.user });
                });
            }
        });
    },
    sign_in(req, res, next){
        passport.authenticate("local")(req, res, () => {
            if(!req.user){
                req.flash("notice", "sign in failed. please try again");
                res.send({response: err });
            } else {
                req.flash("notice", "You've successfully signed in");
                res.send({ response: req.user });
            }
        });
    },
    signOut(req, res, next){
        req.logout();
        req.flash("notice", "You've been successfully signed out.");
        res.send({ response: "success"});
    },
}