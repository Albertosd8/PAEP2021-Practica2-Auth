//Loads the express module
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;
const path = require('path');
const passport = require('passport'); 
const cookieSession = require('cookie-session');

//Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const { profile } = require('console');
require('./config/passport');

//Creates our express server
const app = express();
//view engine setup
app.engine(
    'hbs', 
    exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
//Serves static files (we need it to import a css file)
app.use(express.static(__dirname + "public"));
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['clave'] //clave para encriptar
}));
//Inicializando passport
app.use(passport.initialize());
app.use(passport.session()); 
//app.use(express.static('public'))
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Sets a basic route
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users',usersRouter);
app.use('/profile',profileRouter);

//Makes the app listen to port which is 3000
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));
