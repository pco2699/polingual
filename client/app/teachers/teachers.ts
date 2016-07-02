'use strict';

angular.module('polingualApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teachers', {
        url: '/teachers/:lang/:count/:gend:/:intr',
        template: '<teachers></teachers>',
        dispSearch: true
      });
  });
