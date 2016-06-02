'use strict';

angular.module('testAppApp', [
  'testAppApp.auth',
  'testAppApp.admin',
  'testAppApp.constants',
  'mwl.calendar',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngAnimate'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
