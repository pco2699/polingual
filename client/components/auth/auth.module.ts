'use strict';

angular.module('polingualApp.auth', [
  'polingualApp.constants',
  'polingualApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
