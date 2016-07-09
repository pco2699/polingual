'use strict';

angular.module('polingualApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacherdetail', {
        url: '/teacherdetail/:vteacher',
        template: '<teacherdetail></teacherdetail>',
        dispSearch: false
      });
  });
