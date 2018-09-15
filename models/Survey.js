const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    body: String,
    subjec: String,
    recipients: [String]
});

mongoose.model('surveys',surveySchema);