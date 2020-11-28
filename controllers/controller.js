const path = require('path');
const rootPath = require('../util/path');

exports.getHome = (req, res, next) => {
    res.render('Home.ejs', {
        title: 'Home',
    });
};

exports.getAboutus = (req, res, next) => {
    res.render('Aboutus.ejs', {
        title: 'About us',
    });
};

exports.getStudyInChina = (req, res, next) => {
    res.render('StudyInChina.ejs', {
        title: 'Study in China',
    });
};

exports.getTestimonials = (req, res, next) => {
    res.render('Testimonials.ejs', {
        title: 'Testimonials',
    });
};

exports.getPhotos = (req, res, next) => {
    res.render('Photo.ejs', {
        title: 'Photo',
    });
};


exports.getChinaTrips = (req, res, next) => {
    res.render('ChinaTrips.ejs', {
        title: 'China Trips',
    });
};

exports.getwhychina = (req, res, next) => {
    res.render('WhyChina.ejs', {
        title: 'Why China',
    });
};

exports.getCustomtours = (req, res, next) => {
    res.render('CustomTours.ejs', {
        title: 'Curtom Tours',
    });
};

exports.getBookatour = (req, res, next) => {
    res.render('BookATour.ejs', {
        title: 'Book a Tour',
    });
};

exports.getTeachInChina = (req, res, next) => {
    res.render('TeachInChina.ejs', {
        title: 'Teach In China',
    });
};

exports.getInfoCenter = (req, res, next) => {
    res.render('Passport&Visa.ejs', {
        title: 'Passport & Visa',
    });
};

exports.getVaccinations = (req, res, next) => {
    res.render('Vaccinations.ejs', {
        title: 'Vaccinations',
    });
};

exports.getTripPlanning = (req, res, next) => {
    res.render('TripPlanning.ejs', {
        title: 'Trip Planning',
    });
};

exports.getChinaInfo = (req, res, next) => {
    res.render('ChinaInfo.ejs', {
        title: 'China Info',
    });
};

exports.getContactus = (req, res, next) => {
    res.render('ContactUs.ejs', {
        title: 'Contact Us',
    });
};

exports.getFacebook = (req, res, next) => {
    res.render('Facebook.ejs', {
        title: 'Facebook',
    });
};