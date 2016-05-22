'use strict';

angular.module('testAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mypage', {
        url: '/mypage',
        template: '<mypage></mypage>'
      });
  });
