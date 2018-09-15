const requireLogin = require('../middkewares/requireLogin');

module.exports = app => {
    app.post('/api/surveys', requireLogin, (req,res) => {

    });
};