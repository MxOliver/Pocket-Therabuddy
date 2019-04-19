const moodQueries = require("../db/queries.moods.js.js");

module.exports = {
    add(req, res, next){
        const newMood = {
            moodselect: req.body.moodselect,
            moodlevel: req.body.moodlevel,
            moodnotes: req.body.moodnotes,
            userId: req.user.id
        }

        console.log(newMood);

        moodQueries.create(newMood, (err, mood) => {
            if(err){
                req.flash("error", err);
                console.log(err);
                res.send({ response: err });
            } else {
                req.flash("notice", "Mood added successfully!");
                res.send({ response: 'success'});
            }
        });
    },
    fetchhistory(req, res, next){
        moodQueries.getHistory(req.user, (err, moods) => {

            if(err){
                console.log(err);
                res.send({ response: err });
            } else {
                res.send({ data: moods });
            }
        })
    }
}