var mongoose = require('mongoose');

var Deadline = mongoose.model('Deadline',{
  name:{
    type: String,
    required: true,
    trim: true
  },
  description:{
    type: String,
    required: true,
    trim: true
  },
  due:{
    type: Date
  }
});

module.exports = {Deadline};
