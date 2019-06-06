const skillQueries = require('../db/skill.queries');

module.exports = {
    create(req, res, next){
        let newSkill = req.body.skill;

        skillQueries.create(newSkill, (err, skill) => {
            if(err){
                res.send({ response: err });
            } else {
                res.send({ response: skill })
            }
        })
    },
    fetchAll(req, res, next){
        let userId = req.params.id;

        skillQueries.getAllSkills(userId, (err, skills) => {
            if(err) {
                res.send({ response: err });
            } else {
                res.send({ skills })
            }
        })
    },
    fetchOne(req, res, next){
        let skillId = req.params.id;

        skillQueries.getSkill(skillId, (err, skill) => {
            if(err){
                res.send({ response: err });
            } else {
                res.send({ skill })
            }
        })
    },
    edit(req, res, next){

    },
    update(req, res, next){

    },
    destroy(req, res, next){

    }
}