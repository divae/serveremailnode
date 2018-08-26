const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});
//2 arguments save
mongoose.model('users',userSchema);
