const mongoose = require('mongoose');  
const Schema = mongoose.Schema;
const UserSchema = new Schema({  
  name: String,
  email: String,
  password: String,
  jobs:[{type: Schema.Types.ObjectId, ref: 'Job'}],
  contacts:[{type: Schema.Types.ObjectId, ref: 'Contact'}]
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');