'use strict';

angular.module('polingualApp', [
  'polingualApp.auth',
  'polingualApp.admin',
  'polingualApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTagsInput',
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
  })
  .run(function ($rootScope, $state){
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
      if(!toState.dispSearch){
        $rootScope.dispSearch = false;
      }
      else{
        $rootScope.dispSearch = true;
      }
    })
  });
