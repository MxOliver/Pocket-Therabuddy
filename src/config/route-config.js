module.exports = {
    init(app){
        const staticRoutes = require("../routes/static");
        const moodRoutes = require("../routes/mood");

        app.use(staticRoutes);
        app.use(moodRoutes);
    }

};