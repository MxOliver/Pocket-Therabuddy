const request = require('request');
const base = "http://localhost:3000/api/moodtracker/";
const server = require("../../src/server");
const sequelize = require("../../src/db/models/index").sequelize;
const Mood = require("../../src/db/models").Mood;
const User = require("../../src/db/models").User;

describe('routes : mood', () => {

    beforeEach((done) => {
        this.user;
        this.mood;

        sequelize.sync({force: true}).then(() => {
           User.create({
               name: "Arthur",
               email: "heyArthur@example.com",
               password: "33345"
           }).then((newUser) => {
                this.user = newUser;

                Mood.create({
                    moodlevel: 60,
                    moodselect: 'active',
                    userId: this.user.id
                }).then((newMood) => {
                    this.mood = newMood;
                    done();
                }).catch((err) => {
                    console.log(err);
                    done();
                })
           }).catch((err) => {
            console.log(err);
            done();
        })
        });
    });

    describe('POST /api/moodtracker/add', () => {

        it("should create a new mood instance and return success", (done) => {
            request.post(`${base}add`, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
            done();
        });
    });
    
    describe('GET /api/moodtracker/history', () => {
    
        beforeEach((done) => {
            this.mood;
            let currentDate = new Date();
    
            Mood.create({
                moodselect: "Sad",
                moodlevel: 15,
                createdAt: currentDate,
                userId: this.user.id
            }).then((newMood) => {
                this.mood = newMood;
                done();
            }).catch((err) => {
                console.log(err);
                done();
            })
    
        });
    
    
        it("should query the mood history for the user and return them", (done) => {
            request.get(`${base}${this.user.id}/history`, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });

    });


});

