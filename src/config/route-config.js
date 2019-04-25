module.exports = {
    init(app){
        const userRoutes = require("../routes/user");
        const moodRoutes = require("../routes/mood");

        app.use(userRoutes);
        app.use(moodRoutes);
    }

};