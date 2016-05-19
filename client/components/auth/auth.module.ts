'use strict';

angular.module('testAppApp.auth', [
  'testAppApp.constants',
  'testAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
