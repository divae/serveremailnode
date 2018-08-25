const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use( 
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSerect,
    callbackURL: '/auth/google/callback'
    }, (accesToken, resfreshToken, profile, done) =>{
      //user information
        console.log('accesToken',accesToken);
        console.log('profile',profile);
        console.log('done',accesToken);
  
}));