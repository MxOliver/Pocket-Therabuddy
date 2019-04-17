const express = require("express");
const router = express.Router();

const moodController = require("../controllers/moodController");

router.get('/api/moodhistory', moodController.fetchHistory);


module.exports = router;