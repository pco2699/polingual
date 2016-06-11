'use strict';

angular.module('testAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teachers', {
        url: '/teachers',
        template: '<teachers></teachers>'
      });
  });
