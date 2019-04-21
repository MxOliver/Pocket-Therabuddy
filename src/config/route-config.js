module.exports = {
    init(app){
        const userRoutes = require("../routes/user");
        const moodRoutes = require("../routes/mood");

        if(process.env.NODE_ENV === 'test'){
            const mockAuth = require("../../spec/support/mock-auth.js");
            mockAuth.fakeIt(app);
        }

        app.use(userRoutes);
        app.use(moodRoutes);
    }

};