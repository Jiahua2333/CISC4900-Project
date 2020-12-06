const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes')
const authRoutes = require('./routes/auth');
const sequelize = require('./util/database');
const session = require('express-session');
const csrf = require('csurf');
const flash = require('express-flash-messages')
const SequelizeStore = require("connect-session-sequelize")(session.Store);


const app = express();
const csrfProtection = csrf();



app.set('view engine', 'ejs'); // Using ejs format
app.set('views', 'views'); //Set the root render diretory on views folder

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // The diretory of public folder

app.use(
    session({
      secret: "keyboard cat",
      store: new SequelizeStore({
        db: sequelize,
      }),
      resave: false, // we support the touch method so per the express-session docs this should be set to false
      proxy: true, // if you do SSL outside of node.
    })
  );

app.use(csrfProtection);
app.use(flash())

app.use((req, res, next) => {
	res.locals.isAuthenicated = req.session.isLoggedIn;
	res.locals.csrfToken = req.csrfToken();
	next();
});

app.use(routes);
app.use(authRoutes);



sequelize
    .sync()
    //.sync({force: true})
    .then((result) => {
        //console.log(result);
        app.listen(3000);
        console.log("Listenning localhost 3000")
    })
    .catch(err => {
        console.log(err);
    });