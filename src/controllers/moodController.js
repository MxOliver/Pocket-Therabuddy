const moodQueries = require("../db/queries.moods");

module.exports = {
    add(req, res, next){
        let newMood = req.body.mood;
        
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
        console.log(req.params.id);
        moodQueries.getHistory(req.params.id, (err, moods) => {

            if(err){
                console.log(err);
                res.send({ response: err });
            } else {
                res.send({ data: moods });
            }
        })
    }
}