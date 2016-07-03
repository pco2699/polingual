'use strict';
(function() {

  class TeachersComponent {

    public teachers = [];
    public tlang;

    constructor(public $scope, public $stateParams, public $http) {
    }

  $onInit() {
	  var tlang = this.$stateParams.lang;
	  if (tlang == ''){
		  tlang = 'NA';
	  }
	  var tcount = this.$stateParams.count;
	  if (tcount == ''){
		  tcount = 'NA';
	  }
	  var tintr = this.$stateParams.intr;
	  if (tintr == ''){
		  tintr = 'NA';
	  }
	  var tgend = this.$stateParams.gend;
	  if (tgend == ''){
		  tgend = 'NA';
	  }
	  var params = [tlang, tcount, tgend, tintr];
	  console.log(params.join('/'));
	  this.$http.get('/api/users/byall/' + params.join('/') ,{isArray:true})
	  .then(result => {
             var teachers = result.data;
             this.teachers = teachers;
	  });
   }
 }

angular.module('polingualApp')
  .component('teachers', {
    templateUrl: 'app/teachers/teachers.html',
    controller: TeachersComponent
  });

})();
