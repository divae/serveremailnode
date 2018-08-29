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
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req,res) =>{
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    });
};

