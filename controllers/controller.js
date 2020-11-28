const path = require('path');
const rootPath = require('../util/path');

exports.getHome = (req, res, next) => {
    res.render('Home.ejs',{
        title: 'Home',
    });
};

exports.getAboutus = (req, res, next) => {
    res.render('Aboutus.ejs',{
        title: 'About us',
    });
};

exports.getStudyInChina = (req, res, next) => {
    res.render('StudyInChina.ejs',{
        title: 'Study in China',
    });
};