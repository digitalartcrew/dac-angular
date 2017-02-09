//Express
var express = require('express');
app = express();
methodOverride = require('method-override'),
morgan = require("morgan"),
path = require("path"),
session = require('express-session'),
MongoDBStore = require('connect-mongodb-session')(session);

app.use(express.static(__dirname + '/public'));

//Passport
var passport = require('passport');
require('./config/passport')(passport); //passport configuration


var store = new MongoDBStore(
{
	uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
	collection: 'mySessions'
});

 

    app.use(require('express-session')({
    	secret: 'This is a secret',
    	cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
    },
    store: store,
      // Boilerplate options, see: 
      // * https://www.npmjs.com/package/express-session#resave 
      // * https://www.npmjs.com/package/express-session#saveuninitialized 
      resave: true,
      saveUninitialized: true
  }));


app.use(passport.initialize());
app.use(passport.session());

//Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// use morgan
app.use(morgan("tiny"));
// use method-override
app.use(methodOverride('_method'));


//Routes
require('./routes/auth.js')(app,passport); //load our routes and full configured passport
app.listen(process.env.PORT || 3000, function(req,res){
	console.log("App running on localost 3000");
});