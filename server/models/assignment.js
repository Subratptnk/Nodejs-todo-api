  var mongoose = require('mongoose');


var Assignment =mongoose.model('Assignment',{
   Email: {
     type: String,
     required: true,
     trim: true,
     minlength: 1
   }
});


module.exports = {Assignment};
