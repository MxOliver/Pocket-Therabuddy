const moodQueries = require("../db/queries.moods.js");

module.exports = {
    main(req, res, next){
        res.render("moodtracker/main");
    },
    addForm(req, res, next){
        res.render("moodtracker/add");
    },
    add(req, res, next){
        const newMood = {
            moodselect: req.body.moodselect,
            moodlevel: req.body.moodlevel,
            moodnotes: req.body.moodnotes
        }

        moodQueries.create(newMood, (err, mood) => {
            if(err){
                req.flash("error", err);
                res.redirect(`/addForm`);
            } else {
                req.flash("notice", "Mood added successfully!");
                res.redirect(`/moodtracker`);
            }
        });
    },
    history(req, res, next){
        moodQueries.getHistory((err, result) => {

            if(err || result.moods == undefined){
                console.log(err);
                req.flash("notice", "No history found.");
                res.redirect("/moodtracker");
            } else {
                res.render("moodtracker/history", {...result});
            }
        })
    }
}