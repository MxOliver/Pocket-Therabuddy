const express = require("express");
const router = express.Router();

const moodController = require("../controllers/moodController");

router.post(`/api/moodtracker/add`, moodController.add);

router.get(`/api/moodtracker/:id/history`, moodController.fetchhistory);

router.get(`/api/moodtracker/:id/historyDate`, moodController.dateRange);

router.get(`/api/moodtracker/:id/notes`, moodController.fetchNotes );

router.post(`/api/moodtracker/:id/remove_moodnote`, moodController.removeNote );

module.exports = router;