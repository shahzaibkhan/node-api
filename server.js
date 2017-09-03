var express = require('express'),
app = express(),
port = process.env.PORT || 3000,

mongoose = require('mongoose'),
senseMap = require('./api/models/sensemapModel'),  
bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sensemapDb'); 
//mongoose.connect('mongodb://shahzaib:sVgpQm4SejTdhz9f@ds157682.mlab.com:57682/smapdb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/sensemapRoutes'); 
routes(app);

app.listen(port);
console.log('senseMap RESTful API server started on: ' + port);