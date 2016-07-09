'use strict';

(function() {

class MainController {

  public langs;

  constructor($http, $scope, socket, $state, public appConfig) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    this.submit = function(lang){ $state.go('teachers', {lang: lang}); };

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
