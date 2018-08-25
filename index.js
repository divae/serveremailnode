const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT);

exports.closeServer = function(){
  server.close();
};
