const request = require("request");
const User = require("../../src/db/models").User;
const Mood = require("../../src/db/models").Mood;

describe("Mood", () => {

    beforeEach((done) => {
        this.user;
        this.mood;

        User.create({
            name: "Chase Charter",
            email: "iLoveCharts@example.com",
            password: "chart333"
        }).then((user) => {
            this.user = user;

            Mood.create({
                moodselect: 'active',
                moodlevel: 45,
                moodnotes: null
            }).then((mood) => {
                this.mood = mood;
                done();
            }).catch((err) => {
                console.log(err);
                done();
            })
        })
    });

    describe("#fetchData()", () => {

        it("should return a json of the mood history", (done) => {
            Mood.findAll({where: {userId: this.user.id}, raw: true}).then((moods) => {
                console.log("Moods " + moods);
                expect(moods).toEqual(jasmine.any(Object));
                done();
            }).catch((err) => {
                console.log(err);
                done();
            })
        })
    })
    

})