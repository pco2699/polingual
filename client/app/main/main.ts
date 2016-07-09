'use strict';

angular.module('polingualApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>',
        dispSearch: false
      });
   };)
