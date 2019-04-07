const userQueries = require('../db/user.queries.js');
const User = require('../db/models').User;
const passport = require("passport");

module.exports = {
    createAccount(req, res, next){
        res.render('users/sign_up');
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
                res.redirect('/error');
            } else {
                passport.authenticate("local")(req, res, () => {
                    req.flash('notice', "Account successfully created");
                    res.redirect('/');
                });
            }
        });
    },
    sign_inForm(req, res, next){
        res.render("users/sign_in");
    },
    sign_in(req, res, next){
        passport.authenticate("local")(req, res, () => {
            if(!req.user){
                req.flash("notice", "sign in failed. please try again");
                res.redirect("/sign_in");
            } else {
                req.flash("notice", "You've successfully signed in");
                res.redirect("/");
            }
        });
    },
    signOut(req, res, next){
        req.logout();
        req.flash("notice", "You've been successfully signed out.");
        res.redirect("/");
    },
}