const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
//get collection users (1 arg)
const User = mongoose.model('users');

passport.serializeUser((user,done) => {

});

passport.deserializeUser((id,done) => {
    user.findById(id).then( user =>{
        done(null,user);
    });
        
});

passport.use( 
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSerect,
    callbackURL: '/auth/google/callback'
    }, (accesToken, resfreshToken, profile, done) =>{
       
        User.findOne({googleID:profile.id}).then((exisingUser) => {
            if(exisingUser){
                done(null, exisingUser);
            }else{
                new User({googleId: profile.id})
                .save()
                .then(user => done(null, user));
            }
        });     
  
}));