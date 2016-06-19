'use strict';

angular.module('polingualApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacherdetail', {
        url: '/teacherdetail',
        template: '<teacherdetail></teacherdetail>'
      });
  });
