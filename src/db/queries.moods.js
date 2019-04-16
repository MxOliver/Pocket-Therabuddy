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

        Mood.findAll({where: {userId: user.id}, raw: true}).then((moods) => {
            callback(null, moods);
        }).catch((err) => {
            callback(err);
        })
    },
}