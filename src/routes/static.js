const express = require("express");
const router = express.Router();

const staticController = require("../controllers/staticController");

router.get("/", staticController.index);

router.get("/error", staticController.error);

module.exports = router;