const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
//get collection users (1 arg)
const User = mongoose.model('users');

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id).then( user =>{
        done(null,user);
    });
        
});

passport.use( 
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSerect,
      callbackURL: '/auth/google/callback',
      proxy:true
    },
    async (accesToken, resfreshToken, profile, done) =>{
      const existingUser = await User.findOne({googleId: profile.id});
        if(existingUser){
            return done(null,existingUser);
        }
        
        const user = await new User({googleId:profile.id}).save();
        return done(null,user);
}));