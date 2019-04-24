const request = require("request");
const server = require("../../src/server");
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const base = "http://localhost:3000/api/";

describe("user : routes", () => {

    beforeEach((done) => {
        this.user;
        sequelize.sync({force: true}).then(() => {
            User.create({
                name: "Mr. Rogers",
                email: "rogers@neighborhood.com",
                password: "cardigansRlyfe"
            }).then((user) => {
                this.user = user;
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        });
    });

    describe("POST /sign_up", () => {
        it("should create a new user instance", (done) => {
            const options = {
                url: `${base}sign_up`,
                form: {
                    name: 'Theo',
                    email: 'theo@example.com',
                    password: '1234555'
                }
            };

            request.post(options, (err, res, body) => {
                expect(res.statusCode).toBe(302);

                User.findOne({where: {email: 'theo@example.com'}}).then((newUser) => {
                    expect(user.name).toBe('Theo');
                    done();
                }).catch((err) => {
                    console.log(err);
                    done();
                })
            });
        });
    });

});