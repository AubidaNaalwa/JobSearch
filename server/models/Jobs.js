const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const JobSchema = new Schema({  
    title:String,
    Answer:Number,
    description:String,
    date:{type: Date, default: Date.now}
});
const Job = mongoose.model('Job', JobSchema);

module.exports = Job;