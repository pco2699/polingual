'use strict';

angular.module('polingual')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>'
      });
  });
