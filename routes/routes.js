const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.getHome);
router.get('/aboutus', controller.getAboutus);
router.get('/studyinchina', controller.getStudyInChina);

module.exports = router;