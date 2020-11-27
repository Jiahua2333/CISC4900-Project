const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes')

const app = express();

app.set('view engine', 'ejs'); // Using ejs format
app.set('views', 'views'); //Set the root render diretory on views folder

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // The diretory of public folder

app.use(routes);


app.listen(3000);