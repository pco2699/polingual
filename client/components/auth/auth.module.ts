'use strict';

angular.module('polingual.auth', [
  'polingual.constants',
  'polingual.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
