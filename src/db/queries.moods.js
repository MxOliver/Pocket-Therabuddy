const Mood = require("./models").Mood;

module.exports = {
    create(newMood, callback){
       return Mood.create(newMood).then((mood) => {
            callback(null, mood);
        }).catch((err) => {
            callback(err);
        });
    },
    getHistory(user, callback){

        Mood.findByPk(user.id, {plain: true, raw: true}).then((moods) => {

            callback(null, moods);
        }).catch((err) => {
            callback(err);
        })
    },
}