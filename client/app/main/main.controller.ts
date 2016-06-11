'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.langs = [{name:'Japanese', value:'Japanese'},
	               {name:'English', value:'English'},
               {name:'Duck',value:'Duck'}];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    //this.$http.get('/api/things').then(response => {
    //  this.awesomeThings = response.data;
    //  this.socket.syncUpdates('thing', this.awesomeThings);
    //});
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('polingualApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs: 'mainc'
  });

})();
