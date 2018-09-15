const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { Type: Boolean, default:false }
});

module.exports = recipientSchema;