// load the things we need
var mongoose = require('mongoose');



// define the schema for our user model
var teamSchema = mongoose.Schema({
  id: Number,
  name: String,
  members: Array,
  projects: Array,
  rating: Number
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Team', teamSchema);