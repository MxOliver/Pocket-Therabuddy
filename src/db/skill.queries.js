const Skill = require('../db/models').Skill;

module.exports = {
    create(newSkill, callback){

        Skill.create(newSkill).then((skill) => {
            callback(null, skill);
        }).catch((err) => {
            callback(err);
        })
    },
    getSkill(skillId, callback){
        Skill.findOne({ where: {id: skillId }}).then((skill) => {
            callback(null, skill);
        }).catch((err) => {
            callback(err);
        })
    },
    getAllSkills(userId, callback) {
        Skill.findAll({ where: { userId: userId }}).then((skills) => {
            callback(null, skills);
        }).catch((err) => {
            callback(err);
        })
    },
    update(){

    },
    destroy(){

    }
}