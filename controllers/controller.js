const path = require('path');
const rootPath = require('../util/path');

exports.getHome = (req, res, next) => {
    res.render('Home.ejs', {
        title: 'Home',
        isHome: true,
        isLeft: true,
    });
};

exports.getAboutus = (req, res, next) => {
    res.render('Aboutus.ejs', {
        title: 'About us',
        isHome: false,
        isLeft: true,
    });
};

exports.getStudyInChina = (req, res, next) => {
    res.render('StudyInChina.ejs', {
        title: 'Study in China',
        isHome: false,
        isLeft: true,

    });
};

exports.getTestimonials = (req, res, next) => {
    res.render('Testimonials.ejs', {
        title: 'Testimonials',
        isHome: false,
        isLeft: true,

    });
};

exports.getPhotos = (req, res, next) => {
    res.render('Photo.ejs', {
        title: 'Photo',
        isHome: false,
        isLeft: true,

    });
};


exports.getChinaTrips = (req, res, next) => {
    res.render('ChinaTrips.ejs', {
        title: 'China Trips',
        isHome: false,
        isLeft: true,
    });
};

exports.getwhychina = (req, res, next) => {
    res.render('WhyChina.ejs', {
        title: 'Why China',
        isHome: false,
        isLeft: true,
    });
};

exports.getCustomtours = (req, res, next) => {
    res.render('CustomTours.ejs', {
        title: 'Curtom Tours',
        isHome: false,
        isLeft: true,
    });
};

exports.getBookatour = (req, res, next) => {
    res.render('BookATour.ejs', {
        title: 'Book a Tour',
        isHome: false,
        isLeft: true,
    });
};

exports.getTeachInChina = (req, res, next) => {
    res.render('TeachInChina.ejs', {
        title: 'Teach In China',
        isHome: false,
        isLeft: true,
    });
};

exports.getInfoCenter = (req, res, next) => {
    res.render('Passport&Visa.ejs', {
        title: 'Passport & Visa',
        isHome: false,
        isLeft: true,
    });
};

exports.getVaccinations = (req, res, next) => {
    res.render('Vaccinations.ejs', {
        title: 'Vaccinations',
        isHome: false,
        isLeft: true,
    });
};

exports.getTripPlanning = (req, res, next) => {
    res.render('TripPlanning.ejs', {
        title: 'Trip Planning',
        isHome: false,
        isLeft: true,
    });
};

exports.getChinaInfo = (req, res, next) => {
    res.render('ChinaInfo.ejs', {
        title: 'China Info',
        isHome: false,
        isLeft: true,
    });
};

exports.getContactus = (req, res, next) => {
    res.render('ContactUs.ejs', {
        title: 'Contact Us',
        isHome: false,
        isLeft: true,
    });
};

exports.getFacebook = (req, res, next) => {
    res.render('Facebook.ejs', {
        title: 'Facebook',
        isHome: false,
        isLeft: true,
    });
};