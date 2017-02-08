var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/dac-angular");

mongoose.set("debug", true);

module.exports.User = require("./user");
module.exports.Employer = require("./employer");
module.exports.Team = require("./teams");

