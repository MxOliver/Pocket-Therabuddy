module.exports = {
    init(app){
        const staticRoutes = require("../routes/static");
        const userRoutes = require("../routes/user");
        const moodRoutes = require("../routes/mood");
        const apiRoutes = require("../routes/api");

        if(process.env.NODE_ENV === 'test'){
            const mockAuth = require("../../spec/support/mock-auth.js");
            mockAuth.fakeIt(app);
        }

        app.use(apiRoutes)
        app.use(staticRoutes);
        app.use(userRoutes);
        app.use(moodRoutes);
    }

};