var mongoose = require('mongoose');

// User Model
// Properties: Email (required, trim, type=string, minLength=1)
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {User}
