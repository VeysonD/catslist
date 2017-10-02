var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
  name: String,
  owner: String,
  image: String,
  description: String
});

var Cat = mongoose.model('Cat', catSchema);
// var pepper = new Cat({name: 'Bob', owner: 'me'});
// console.log('schema CAT', pepper);
module.exports.cat = Cat;
