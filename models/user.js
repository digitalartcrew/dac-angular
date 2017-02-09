// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


// define the schema for our user model
var userSchema = mongoose.Schema({
  first: String,
  last: String,
  username: String,
  password: String,
  occupation: String,
  descriptions: String,
  links: Array,
  teams: Array,
  posts: Array,
  projects: Array,
  contests: Array,
  location: String,
  rating: Number,
  favCompanies: Array,
  favArtists: Array,
  profileImage: String,
  videoupload: String
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);