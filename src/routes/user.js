const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get('/sign_up', userController.createAccount);

router.post('/sign_up', userController.sign_up);

router.get('/sign_in', userController.sign_inForm);

router.post('/sign_in', userController.sign_in);

router.get('/sign_out', userController.signOut);

module.exports = router;