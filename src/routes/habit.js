const express = require('express');
const router = express.Router();

const habitController = require('../controllers/habitController');

router.post(`/api/habittracker/add_habit`, habitController.create);
router.get(`/api/habittracker/:id/history`, habitController.fetchHistory);
router.get(`/api/habittracker/:id/notes`, habitController.fetchNotes );

module.exports = router;