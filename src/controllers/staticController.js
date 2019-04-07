module.exports = {
    index(req, res, next){
        res.render("static/index");
    },
    error(req, res, next){
        res.render("static/error");
    }
}