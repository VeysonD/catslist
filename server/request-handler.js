var express = require('express');
var bodyParser = require('body-parser');
var db = require('./../db/config.js');
var Cat = require('./../db/schema.js').cat;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  res.send('Welcome to cats');
});

app.get('/api/cats', function(req, res) {
  Cat.find({}, function(err, cats) {
    if (err) {
      console.log('There was a GET cats error', err);
      res.status(500).send(err);
    } else {
      console.log('GET cats from database successful');
      res.status(200).send(cats);
    }
  });
});

app.post('/api/cats', function(req, res) {
  console.log(req.body);
  var dbCat = new Cat(req.body);
  console.log(dbCat);

  dbCat.save(function(error, dbCat) {
    if (error) {
      console.log('There was an error when saving the cat', error);
      res.status(500).send(error);
    } else {
      console.log('A new cat has been added to the cats collection');
      //send back the information of the cat so that we know that the request was handled
      res.status(200).send('Saved a cat');
    }
  });
});

module.exports = app;
