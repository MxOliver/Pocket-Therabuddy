// const Mood = require("./models").Mood;

// module.exports = {
//     create(newMood, callback){
//        return Mood.create(newMood).then((mood) => {
//             callback(null, mood);
//         }).catch((err) => {
//             callback(err);
//         });
//     },
//     getHistory(callback){
//         let result = {};

//         Mood.scope({method: ["lastWeek"]}).all().then((moods) => {
//             result["moods"] = moods;

//             callback(null, result);
//         }).catch((err) => {
//             callback(err);
//         })
//     },
// }