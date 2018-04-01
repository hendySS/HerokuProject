var express = require("express");
var app = express();
var port = process.env.port || 3000;


var mongoose = require("mongoose");
var bodyParse = require("body-parser");

var User = require('./models/accountModel');
var Company = require('./models/accountModel');
var CompanyLain = require('./models/accountModel');
var People = require('./models/accountModel');
var Project = require('./models/accountProject');
var Team = require('./models/accountModel');
var Archive = require('./models/accountModel');

var path = require("path");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:inipassword@ds227459.mlab.com:27459/tes');

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));
//app.use(session({secret:"kajsdkasjdhaskjshsdf", resave:false, saveUninitialized:true}));

var routes = require('./routes/accountRoute');

routes(app);

app.listen(port);

console.log('Server Running on port ' + port); 