var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/catslist');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Welcome to MON GOD');
});

module.exports = db;
