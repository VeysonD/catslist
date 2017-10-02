/**
 *  This file should be a standalone script that seeds your database,
 *  making testing interactions with your database much easier.
 *
 *  You should be able to run this file from Terminal with:
 *
 *    node ./seed.js
 *
 *  And populate your database with all the data from `data.json`
 */
var mongoose = require('mongoose');
var Cat = require('./db/schema.js').cat;
var seedCats = require('./data.json');


mongoose.connect('mongodb://localhost/catslist');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Seeding default values');
});


// Step 1: Drop old data
Cat.remove({}, function(error) {
  console.log('Cat collection data has been removed');
});

// Step 2: Add data from `data.json`
seedCats.forEach(function(cat) {
  var dbCat = new Cat({
    name: cat.name,
    owner: cat.owner,
    image: cat.image,
    description: cat.description
  });
  dbCat.save(function(error, dbCat) {
    if (error) {
      console.log('There was an error when saving the cat', error);
    } else {
      console.log('A new cat has been added to the cats collection');
    }
  });
});
