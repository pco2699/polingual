'use strict';

(function() {

class MainController {

  public langs;

  constructor($http, $scope, socket, public appConfig) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.langs = this.appConfig.langs;
  }
}

angular.module('polingualApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
