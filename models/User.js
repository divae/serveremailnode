const mongoose = require('mongoose');
const { Schema } = mongoose;

//create new schema
const userSchema = new Schema({
    googleId: String,    

});

//generate collection users (2 arg)
mongoose.model('users',userSchema);
