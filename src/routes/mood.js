const express = require("express");
const router = express.Router();

const moodController = require("../controllers/moodController");

router.get("/moodtracker", moodController.main);

router.get("/moodtracker/add", moodController.addForm);

router.post("/moodtracker/add", moodController.add);

module.exports = router;