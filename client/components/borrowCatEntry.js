angular.module('cats-list')
  .controller('borrowEntryController', function() {
    this.email = false;
    this.image = this.cat.image;
    this.handleClick = () => {
      this.email = !this.email;
    };
  })
  .component('borrowEntry', {
    bindings: {
      cat: '<'
    },
    controller: 'borrowEntryController',
    templateUrl: 'client/templates/borrowCatEntry.html'
  });
