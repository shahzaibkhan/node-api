'use strict';

// Creating the Schemas
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
  tabID: { type: Number },
  url: { type: String }
});

var sensemapSchema = new Schema({
  fullName: {
    type: String,
    Required: 'Enter the full name of the user'
  },
  emailAddress: {
    type: String,
    Required: 'Enter the email address of the user'
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  activeSession: [sessionSchema]
});

module.exports = mongoose.model('SenseMap', sensemapSchema);

/*

For Testing:

{
"fullName":"Shahrukh Khan",
"emailAddress":"shahrukh@gmail.com",
"activeSession":[ {"tabID":1,"url":"http://google.com"}, {"tabID":1,"url":"http://google.com"} ],
"createdOn":"2017-08-16T15:49:30.325Z"
}

*/