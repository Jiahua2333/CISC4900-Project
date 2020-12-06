const User = require("../models/user");
const bcrypt = require('bcrypt');

exports.getLogin = (req, res, next) => {
    res.render('Login.ejs', {
        title: 'Login',
        csrfToken: req.csrfToken(),
		errorMessage: req.flash('error'),
    });
};

exports.postLogin = (req, res, next) => {
    // console.log(req.body.email);
    const { email, password } = req.body;
    User.findOne({ where: { email: email} })
        .then((user) => {
            if(!user){
                // console.log("loginned");
                req.flash('error', 'User not found');
                return res.redirect('/');
            }
            // else{
            //     console.log("No this user");
            //     res.redirect('/login');
            // }
            bcrypt
				.compare(password, user.password)
				.then((doMatch) => {
                    console.log(password, user.password, doMatch)
                    //bcrypt.hash(password, 12).then(result => console.log(result));
					if (doMatch) {
						req.session.isLoggedIn = true;
						req.session.user = user;
						return req.session.save((err) => {
							console.log(err);
							return res.redirect('/');
						});
					}
					req.flash('error', 'Password not match');
					res.redirect('/login');
				})
				.catch((err) => {
					console.log(err);
					return res.redirect('/login');
				});
        })
        .catch(err => console.log(err));

        
};

exports.getsignup = (req, res, next) => {
    res.render('Signup.ejs', {
        title: 'Sign up',
        errorMessage: req.flash('error'),
    });
};

exports.postSignup = (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;
    //console.log(username, email, password, confirmPassword)
    User.findOne({ where: { email: email } })
        .then((user) => {
            if (user) {
                req.flash('error', 'This eamil has been used');
                return res.redirect('/signup');
            }
            if (password !== confirmPassword) {
				req.flash('error', 'The confirmPassword not match');
				return res.redirect('/signup');
			}
            return bcrypt.hash(password.toString(), 12)
            .then((hashedPassword) => {
                User.create({
                    username,
                    email,
                    password: hashedPassword,
                })
                .then((result) => {
                    return res.redirect('/');
                })
                .catch(err => console.log(err));
            }).catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

