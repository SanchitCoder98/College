var mongoose = require('mongoose');

var Class = mongoose.model('Class',{
  name:{
    type: String,
    required: true,
    trim: true
  },
  profname:{
    type: String,
    required: true,
    trim: true
  },
  profID:{
    type: Schema.Types.ObjectId
  },
  deadlines:[{
    type: Schema.Types.ObjectId
  }]
});

module.exports = {Class};
