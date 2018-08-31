const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: [keys.cookieKey],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
console.log(2);
if(process.env.NODE_ENV === 'production'){
  console.log(1);
  //express vill serve up production assets
  //like our main.jf file, or main.css file!
  app.use(express.static('client/built'));
  //empress will serve up the nde.jtml file
  //if ti doesn't recognize the route
  const path = require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
}

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT);

exports.closeServer = function(){
  server.close();
};
