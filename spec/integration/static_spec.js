const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/"

describe(" routes: static", () => {

    describe("GET /", () => {

        it("should render the index view with a status code of 200", (done) => {
            request.get(`${base}`, (err, res, body) => {
                expect(body).toContain("Pocket Thera-buddy");
                expect(res.statusCode).toBe(200);
                expect(err).toBeNull();
                done();
            });
        });
    });

});