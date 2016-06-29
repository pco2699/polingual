'use strict';

angular.module('polingualApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>',
        authenticate: true,
        dispSearch: false
      });
  });
