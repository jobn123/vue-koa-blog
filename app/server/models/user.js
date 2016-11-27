// var mongoose = require('mongoose');
// var UserSchema = new mongoose.schema({
//   uid: Number,
//   username: String,
//   createTime: Date,
//   lastLogin: Date
// })
// module.exports = UserSchema;
//  // module.exports = mongoose.model('User',UserSchema);
const Mongolass = require('mongolass');
const User = Mongolass.model('User', {
  name: { type: 'string' },
  age: { type: 'number' }
});
module.exports = User;
