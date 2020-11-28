const path = require('path');
const rootPath = require('../util/path');

exports.getHome = (req, res, next) => {
    res.render('Home.ejs',{
        title: 'Home',
    });
};