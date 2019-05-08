const Habit = require("./models").Habit;
const Sequelize = require('./models/index').Sequelize;
const Op = Sequelize.Op;

module.exports = {
    create(newHabit, callback){
        Habit.create(newHabit).then((habit) => {
            callback(null, habit);
        }).catch((err) => {
            callback(err);
        })
    },
    getHistory(id, callback){
        Habit.findAll({ where: {userId: id}, attributes: ['type', 'frequency', 'createdAt'], raw: true}).then((habits) => {
            callback(null, habits);
        }).catch((err) => {
            callback(err);
        })
    },
    getNotes(id, callback){
        Habit.findAll({ where: {userId: id, notes: {[Op.ne]: null}}, attributes: ['notes', 'type', 'createdAt', 'frequency'], raw: true}).then((notes) => {
            callback(null, notes);
        }).catch((err) => {
            callback(err);
        })
    },
    destroyNote(noteId, callback){
        Habit.findOne({ where: {id: noteId}}).then((habit) => {
            habit.update({ note: null }).then(() => {
                callback(null, "success");
            }).catch((err) => {
                callback(err);
            })
        })
    }
}