const express = require('express');
const router = express.Router();

const skillController = require('../controllers/skillController');

router.post(`/copingskills/add`, skillController.create);

router.get(`/copingskills/:skillId`, skillController.fetchOne);

router.get(`/copingskills/:id`, skillController.fetchAll);