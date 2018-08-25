const express = require('express')

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

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
//forward users's request to google
app.get(
    '/auth/google',
    passport.authenticate('google',{
      scope: ['profile','email']
    })
);

//user grant permission, take the code from the url
app.get(
  '/auth/google/callback',
  passport.authenticate('google',{
    scope: ['profile','email']
  })
);



const PORT = process.env.PORT || 5000;
var server = app.listen(PORT);

exports.closeServer = function(){
  server.close();
};
