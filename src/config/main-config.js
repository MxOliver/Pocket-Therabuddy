require("dotenv").config();

const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("express-flash");
const logger = require("morgan");
const passportConfig = require("./passport-config");

module.exports = {
    init(app, express){
        
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(session({
            secret: process.env.cookieSecret,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 1.21e+9 }
        }));

        app.use(cors());
        app.use(flash());
        passportConfig.init(app);

        app.use((req, res, next) => {
            res.locals.currentUser = req.user;
            next();
        })

        app.use(express.static(path.resolve(__dirname, 'client', 'public', 'index.html')));

        if(process.env.NODE_ENV === 'production') {
            app.use(express.static('client/build'));

            app.get('*', (req, res) => {
              res.sendFile(path.resolve(__dirname, '..', '..', '..', 'client', 'build', 'index.html'));
            })
        }

        ///app.use(express.static(path.join(__dirname, "..", "assets")));
        app.use(logger('dev'));
    }
}