const Mood = require("./models").Mood;
const Sequelize = require('./models/index').Sequelize;
const Op = Sequelize.Op;

module.exports = {
    create(newMood, callback){
       return Mood.create(newMood).then((mood) => {
            callback(null, mood);
        }).catch((err) => {
            callback(err);
        });
    },
    getHistory(id, callback){

        Mood.findAll({where: {userId: id}, attributes: ['moodselect', 'moodlevel', 'createdAt'], raw: true}).then((moods) => {
            callback(null, moods);
        }).catch((err) => {
            callback(err);
        })
    },
    getDateRange(id, callback){
        
        Mood.findAll({where: {userId: id}, attributes: ['createdAt'], limit: 1, order: [ ['createdAt', 'ASC']], raw: true}).then((date) => {
            callback(null, date);
        }).catch((err) => {
            callback(err);
        })
    },
    getNotes(id, callback){
        Mood.findAll({ where: {userId: id, moodnotes: {[Op.ne]: null}}, attributes: ['moodnotes', 'createdAt', 'moodselect', 'moodlevel'], raw: true}).then((notes) => {
            callback(null, notes);
        }).catch((err) => {
            callback(err);
        })
    },
    destoryNote(id, callback){
        Mood.findOne({ where: {id: id }}).then((mood) => {
            mood.update({ moodnotes: null }).then(() => {
                callback(null, "success");
            }).catch((err) => {
                callback(err);
            })
        })
    }
}