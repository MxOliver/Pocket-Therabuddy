const habitQueries = require('../db/habit.queries');

module.exports = {
    create(req, res, next){
        let newHabit = req.body.habit;
        console.log(newHabit);

        habitQueries.create(newHabit, (err, habit) => {
            if(err){
                res.send({ response: err });
            } else {
                res.send({ response: habit });
            }
        })
    },
    fetchHistory(req, res, next){
        let userId = req.params.id;

        habitQueries.getHistory(userId, (err, habits) => {
            if(err){
                res.send({ response: err });
            } else {
                res.send({ habits });
            }
        })
    },
    fetchNotes(req, res, next){
        let userId = req.params.id;

        habitQueries.getNotes(userId, (err, notes) => {
            if(err){
                res.send({ response: err });
            } else {
                res.send({ notes });
            }
        })
    }
}