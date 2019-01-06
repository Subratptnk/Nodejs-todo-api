  var mongoose = require('mongoose');



var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required:true,       //cant be blank,using validator
    minlength: 1,         //minimum length validator
    trim: true                // trims any white space and blank space value
  },
  completed: {
     type: Boolean,
     default: false     // if left blank then it will be false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


module.exports = {Todo};
