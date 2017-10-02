var app = angular.module('cats-list', [])
.controller('appController', function($scope, catRequest) {
  this.cats = {};
  this.showBorrow = true;
  this.showLend = false;

  this.handleRenderBorrow = () => {
    if (this.showBorrow === false) {
      this.showLend = false;
      this.showBorrow = true;
      catRequest.catGet(this.retrieveCats);
    }
  };

  this.handleRenderLend = () => {
    if (this.showLend === false) {
      this.showBorrow = false;
      this.showLend = true;
    }
  };

  this.retrieveCats = (cats) => {
    this.cats = cats.data;
  };
  catRequest.catGet(this.retrieveCats);
})
.component('app', {
  controller: 'appController',
  templateUrl: 'client/templates/app.html'
});
