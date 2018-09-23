var mongoose = require('mongoose');

var User = mongoose.model('User',{
  name:{
    type: String,
    required: true,
    trim: true
  },
  classes:[{
    type: mongoose.Schema.Types.ObjectId
  }]
});

module.exports = {User};
