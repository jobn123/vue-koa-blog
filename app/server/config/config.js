var Mongolass = require('Mongolass');
var mongolass = new Mongolass('mongodb://localhost:27017/blog');

module.exports = mongolass
