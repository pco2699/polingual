'use strict';

angular.module('polingualApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teachers', {
        url: '/teachers/:lang',
	resolve: {
		teachers: function($stateParams, $http){
		  var lang = $stateParams.lang
		  return $http.get('/api/users/bylang/' + lang);
		}
	},
        template: '<teachers></teachers>'
      });
  });
