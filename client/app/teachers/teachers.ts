'use strict';

angular.module('polingualApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teachers', {
        url: '/teachers',
	resolve: {
		teachers: function($stateParams, $http){
		  var lang = $stateParams.lang
		  return $http.get('/api/users/bylang/' + lang);
		}
	},
        template: '<teachers></teachers>',
        dispSearch: true
      });
  });
