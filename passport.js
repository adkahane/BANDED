// load all the things we need
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
// var User       = require('../app/models/user.js');

// load the auth variables
// var configAuth = require('./auth');

// module.exports = function(passport) {

    // // used to serialize the user for the session
    // passport.serializeUser(function(user, done) {
    //     done(null, user.id);
    // });

    // // used to deserialize the user
    // passport.deserializeUser(function(id, done) {
    //     User.findById(id, function(err, user) {
    //         done(err, user);
    //     });
    // });



    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
  passport.use(new GoogleStrategy({
    clientID: "326433976152-kqhp9718ameli659tkp250657m3m0bri.apps.googleusercontent.com",
    clientSecret: "cuEQIFtvGdGmP18CQxWsx0bu",
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  

  function (token, refreshToken, profile, done) {
    // async (token, refreshToken, profile, done) => {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        //process.nextTick(function() {

            // try to find the user based on their google id
        //     User.findOne({ 'google.id' : profile.id }, function(err, user) {
        //         if (err)
        //             return done(err);

        //         if (user) {

        //             // if a user is found, log them in
        //             return done(null, user);
        //         } else {
        //             // if the user isnt in our database, create a new user
        //             var newUser          = new User();

        //             // set all of the relevant information
        //             newUser.google.id    = profile.id;
        //             newUser.google.token = token;
        //             newUser.google.name  = profile.displayName;
        //             newUser.google.email = profile.emails[0].value; // pull the first email

        //             // save the user
        //             newUser.save(function(err) {
        //                 if (err)
        //                     throw err;
        //                 return done(null, newUser);
        //             });
        //         }
        //     });
        // });
        console.log(profile);
        console.log("success");
        done(null, false);
    }))

