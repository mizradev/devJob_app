const mongoose =require('mongoose');
require('./config/db');
const express = require('express');
const exphbs =  require('express-handlebars');
const path = require('path');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

require('dotenv').config({ path: 'vars.env'});

const app =  express();

app.engine('handlebars', exphbs({
    defaultLayout: 'layout',
    helpers: require('./helpers/handlebars')
}));

app.set('view engine', 'handlebars');

// static file
app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection : mongoose.connection })
}))

app.use('/', router());
app.listen(process.env.PORT);
