angular.module('cats-list')
  .controller('lendController', function(catRequest) {
    this.catInfo = {};

    this.handleSubmit = () => {
      catRequest.catPost(this.catInfo);
      this.catInfo = {};
    };
  })
  .component('lendCat', {
    controller: 'lendController',
    templateUrl: 'client/templates/lendCat.html'
  });
