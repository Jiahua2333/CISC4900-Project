const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.getHome);
router.get('/aboutus', controller.getAboutus);
router.get('/aboutus/testimonials', controller.getTestimonials);
router.get('/aboutus/photos', controller.getPhotos);

router.get('/chinatrips', controller.getChinaTrips);
router.get('/chinatrips/whychina', controller.getwhychina);
router.get('/chinatrips/customtours', controller.getCustomtours);
router.get('/chinatrips/bookatour', controller.getBookatour);

router.get('/teachinchina', controller.getTeachInChina);

router.get('/studyinchina', controller.getStudyInChina);

router.get('/infocenter', controller.getInfoCenter);
router.get('/infocenter/vaccinations', controller.getVaccinations);
router.get('/infocenter/tripplanning', controller.getTripPlanning);
router.get('/infocenter/chinainfo', controller.getChinaInfo);

router.get('/contactus', controller.getContactus);
router.get('/contactus/facebook', controller.getFacebook);

router.post('/comments', controller.postComments);
router.get('/comments', controller.getComments);

router.post('/profile', controller.postProfile);
router.get('/profile/edit', controller.getEditProfile);
router.get('/profile', controller.getProfile);


module.exports = router;