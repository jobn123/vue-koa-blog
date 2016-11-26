var mongoose = require('mongoose');
var UserSchema = new mongoose.schema({
  uid: Number,
  username: String,
  createTime: Date,
  lastLogin: Date
})
module.exports = UserSchema;
 // module.exports = mongoose.model('User',UserSchema);
