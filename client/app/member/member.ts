'use strict';

angular.module('testAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('member', {
        url: '/member',
        template: '<member></member>'
      });
  });
