'use strict';

angular.module('polingualApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teachers', {
        url: '/teachers/:lang',
	resolve: {
                  teacherstest: function($stateParams, public $http){
		  var tlang = $stateParams.lang;
		  var result = $http.get('/api/users/bylang/' + tlang,{isArray:true});
		  return result;
		}
	},
        template: '<teachers></teachers>',
        dispSearch: true
      });
  });
