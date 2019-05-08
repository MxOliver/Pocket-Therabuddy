module.exports = {
    init(app){
        const userRoutes = require("../routes/user");
        const moodRoutes = require("../routes/mood");
        const habitRoutes = require('../routes/habit');

        app.use(userRoutes);
        app.use(moodRoutes);
        app.use(habitRoutes);
    }

};