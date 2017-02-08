// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


// define the schema for our employer model
var employerSchema = mongoose.Schema({
  companyName: String,
  admin: {
    first: String,
    last: String,
  },
  password: String,
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
employerSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
employerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for employers and expose it to our app
module.exports = mongoose.model('Employer', employerSchema);