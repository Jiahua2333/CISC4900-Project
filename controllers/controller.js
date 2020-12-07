const User = require("../models/user");
const Comments = require("../models/comments");

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

exports.getComments = async (req, res, next) => {
    const comments = await Comments.findAll();
    const commentsWusername = comments.map(async (comment) => {
        const user = await User.findOne({ where: { id: comment.UserId } });
        //console.log(user);
        comment = { ...comment.dataValues, username: user.username };
        return comment;
    });

    Promise.all(commentsWusername)
        .then((results) => {
            //console.log(results[0].createAt);
            res.render('Comments.ejs', {
                comments: results,
                title: 'Comments',
            });
        }).catch((err) => console.log(err));;
};

exports.postComments = (req, res, next) => {
    const comment = req.body.comments;
    console.log(req.session.user);
    // req.session.user.createComment({comment})
    // .then((result) => {
    //     console.log(result);
    //     res.redirect('/');
    // })
    // .catch((err) => console.log(err));
    User.findOne({ where: { id: req.session.user.id } })
        .then((user) => {
            if (!user) {
                alert("Your haven't loginned");
                res.redirect('/');
            } else {
                user.createComment({ content: comment })
                    .then((result) => {
                        console.log(result);
                        res.redirect('/comments');
                    })
                    .catch((err) => console.log(err));
            }
        }).catch((err) => console.log(err));
};

exports.getProfile = async (req, res, next) => {
    //console.log(req.session.user);
    const comments = await Comments.findAll({ where: { UserId: req.session.user.id } })
    const user = await User.findOne({ where: { id: req.session.user.id } });
    res.render('Profile.ejs', {
        title: 'Profile',
        showEdit: false,
        user: user,
        comments: comments,
    });
};

exports.getEditProfile = async (req, res, next) => {
    const comments = await Comments.findAll({ where: { UserId: req.session.user.id } })
    const user = await User.findOne({ where: { id: req.session.user.id } });
    res.render('Profile.ejs', {
        title: 'Profile',
        showEdit: true,
        user: user,
        comments: comments,
    });
};

exports.postProfile = async (req, res, next) => {
    let { username, email, firstName, lastName, address } = req.body;
    
    let user = await User.findOne({ where: { id: req.session.user.id } });
    user = user.dataValues;
    if(username === "") username = user.username;
    if(email === "") email = user.email;
    if(firstName === "") firstName = user.firstName;
    if(lastName === "") lastName = user.lastName;
    if(address === "") address = user.address;
    User.update({ username: username, email: email, firstName: firstName, lastName: lastName, address: address }, { where: { id: req.session.user.id } })
        .then((num) => {
            res.redirect('/profile');
        }).catch(err => console.log(err));

};