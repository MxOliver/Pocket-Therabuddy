const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3001/moodtracker/"

const sequelize = require("../../src/db/models/index").sequelize;
const Mood = require("../../src/db/models").Mood;
const User = require("../../src/db/models").User;

describe(" routes : moods ", () => {

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
        })
    });

        describe("GET /moodtracker", () => {
            
            it("should render the mood tracker view", (done) => {
                request.get(`${base}`, (err, res, body) => {
                    expect(body).toContain("Mood Tracker");
                    expect(res.statusCode).toBe(200);
                    expect(err).toBeNull();
                    done();
                });
            });

        });

        describe("GET /add", () => {

            it("should render the add mood view", (done) => {
                request.get(`${base}add`, (err, res, body) => {
                    expect(body).toContain("Add Mood");
                    expect(res.statusCode).toBe(200);
                    expect(err).toBeNull();
                    done();
                });
            });
        });

        describe("POST /add", () => {

            it("should submit the form and add a new mood to the history", (done) => {
                let currentDate = new Date();

                const options = {
                    url: `${base}add`,
                    form: {
                        moodselect: "active",
                        moodlevel: 30,
                        moodnotes: "Feeling good about life.",
                        createdAt: currentDate,
                        userId: this.user.id
                    }
                }

                request.post(options, (err, res, body) => {
                    Mood.findOne({where: {createdAt: currentDate, moodselect: "active"}}).then((mood) => {
                        expect(mood.moodlevel).toBe("30");
                        expect(mood.moodnotes).toBe("Feeling good about life.");
                        done();
                    }).catch((err) => {
                        console.log(err);
                        done();
                    });

                    expect(res.statusCode).toBe(302);
                    done();
                });
            });
        });

        // describe("GET /history", () => {

        //     beforeEach((done) => {
        //         this.mood;
        //         let currentDate = new Date();

        //         Mood.create({
        //             moodselect: "Sad",
        //             moodlevel: 15,
        //             createdAt: currentDate
        //         }).then((newMood) => {
        //             this.mood = newMood;
        //             done();
        //         }).catch((err) => {
        //             console.log(err);
        //             done();
        //         })

        //     });

        //     it("should render a view with the recent mood history", (done) => {
        //         request.get(`${base}history`, (err, res, body) => {
        //             expect(body).toContain("Mood History");
        //             expect(res.statusCode).toBe(200);
        //             expect(body).toContain("Sad");
        //             done();
        //         });
        //     });
        // });
});
