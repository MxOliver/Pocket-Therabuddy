const Mood = require("./models").Mood;

module.exports = {
    create(newMood, callback){
       return Mood.create(newMood).then((mood) => {
            callback(null, mood);
        }).catch((err) => {
            callback(err);
        });
    },
    getHistory(id, callback){

        Mood.findAll({where: {userId: id}, raw: true}).then((moods) => {
            callback(null, moods);
        }).catch((err) => {
            callback(err);
        })
    },
}