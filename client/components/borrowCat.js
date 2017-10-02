angular.module('cats-list')
  .controller('borrowController', function($scope, catRequest) {
    this.email = false;
    this.showEmail = () => {

    };
  })
  .component('borrowCat', {
    bindings: {
      cats: '<'
    },
    controller: 'borrowController',
    templateUrl: 'client/templates/borrowCat.html'
  });
