const passport = require('passport');

module.exports = (app) => {
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
};

