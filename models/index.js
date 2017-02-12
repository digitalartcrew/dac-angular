var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://heroku_014b7mf2:8llht4po9su63o52v659e669g3@ds139899.mlab.com:39899/heroku_014b7mf2');

mongoose.set("debug", true);

module.exports.User = require("./user");
module.exports.Employer = require("./employer");
module.exports.Team = require("./teams");

