const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const ContactSchema = new Schema({  
    name:String,
    Answer:Number,
    description:String,
    date:{type: Date, default: Date.now}
});
const Contacts = mongoose.model('Contact', ContactSchema);

module.exports = Contacts;