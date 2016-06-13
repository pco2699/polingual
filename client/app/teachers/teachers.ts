'use strict';

angular.module('polingualApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teachers', {
        url: '/teachers',
        template: '<teachers></teachers>'
      });
  });
