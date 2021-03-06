'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');


/* Connect to your database */
mongoose.connect(config.db.uri, {useMongoClient: true}, function(err, res){
  if(err){
    console.log('Cannot connect to ' + config.db.uri + '.' + err);
  } else {
    console.log('Succesfully connected to ' + config.db.uri);
  }
});



/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

var listingdata = require('./listings.json');

Listing.collection.insertMany(listingdata.entries);

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */