angular.module('cats-list')
  .service('catRequest', function($http) {
    this.server = '/api/cats';
    //change this to localhost because deployment
    //change to /api/cats because expecting json to be loaded
      //require changes on backend and frontend
    this.catPost = function(cat) {
      console.log('Cat POST');
      console.log('CatPost info', cat);
      $http.post(this.server, cat)
        .then(function(response) {
          console.log('POST cat received');
        })
        .catch(function(response) {
          console.log('POST cat error', response);
        });
    };

    this.catGet = function(callback) {
      console.log('Cat GET');
      $http.get(this.server)
        .then(function(response) {
          console.log('GET cats finished', response);
          callback(response);
        })
        .catch(function(response) {
          console.log('GET cats error', response);
        });
    };

  });
