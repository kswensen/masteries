require('dotenv').config();

const express = require('express'),
    passport = require('passport'),
    cors = require('cors'),
    session = require('express-session'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive');

const controller = require('./controller/controller');

const app = express();
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
},
    function (accessToken, refreshToken, extraParams, profile, done) {
        app.get('db').find_user(profile.id).then(user => {
            if (user[0]) {
                done(null, user);
            } else {
                app.get('db').create_user([profile.name.givenName, profile.name.familyName, profile.id]).then(user => {
                    done(null, user[0]);
                });
            }
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/', 
    failureRedirect: '/'
}));

app.get('/auth/me', (req, res, next) => {
    if(!req.user){
        res.status(200).send("User not found");
    } else {
        res.status(200).send(req.user);
    }
});

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/#/');
});

// Controller endpoints

app.post('/api/addChore/:chore', (req, res) => {
    let db = app.get('db');
    controller.create(db, req, res);
});

app.get('/api/getChores', (req, res) => {
    let db = app.get('db');
    controller.read(db, req, res);
});

app.put('/api/editChore/:chore_id/:newChore', (req, res) => {
    let db = app.get('db');
    controller.update(db, req, res);
});

app.delete('/api/deleteChore/:chore_id', (req, res) => {
    let db = app.get('db');
    controller.delete(db, req, res);
});

const port = 3090;
app.listen(port, console.log(`It's lit on ${port} fam!`));