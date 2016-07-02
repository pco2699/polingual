'use strict';
(function() {

  class TeachersComponent {

    public teachers = [];
    public tlang;

    constructor(public $scope, public $stateParams, public $http) {
    }

  $onInit() {
	   var tlang = this.$stateParams.lang;
	   var tcount = this.$stateParams.count;
	   var tintr = this.$stateParams.intr;
	   var tgend = this.$stateParams.gend;
	   var params = [tlang, tcount, tgend, tintr];
	   for (let param of params){
		   console.log(param);
		   if (param == null || typeof param === 'undefined'){
			   param = 'NA';
		           console.log(param);
		   }
	   }
	   console.log(params.join('/'));
	   this.$http.get('/api/users/byall/' + params.join('/') ,{isArray:true})
	   .then(result => {
              var teachers = result.data;
              this.teachers = teachers;
	   });
  }

  angular.module('polingualApp')
    .component('teachers', {
      templateUrl: 'app/teachers/teachers.html',
      controller: TeachersComponent
    });

})();
