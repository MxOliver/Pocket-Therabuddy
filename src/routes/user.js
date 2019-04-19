const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post('/api/user', userController.currentUser);

router.post('/api/sign_up', userController.sign_up);

router.post('/api/sign_in', userController.sign_in);

router.get('/api/sign_out', userController.signOut);

module.exports = router;