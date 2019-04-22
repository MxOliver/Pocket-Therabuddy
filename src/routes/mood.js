const express = require("express");
const router = express.Router();

const moodController = require("../controllers/moodController");

router.post(`/api/moodtracker/add`, moodController.add);

router.get(`/api/moodtracker/:id/history`, moodController.fetchhistory);

module.exports = router;