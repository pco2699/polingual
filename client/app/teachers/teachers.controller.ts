'use strict';
(function(){

class TeachersComponent {

  /*public teachers = [{name: 'Scott', gender: 'Male', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'Merry', gender: 'Female', country: 'Japan', language: 'Japanese'},
    {name: 'takayama', gender: 'Other', country: 'Japan', language: 'Japanese'}];*/

  public teachers;
  public tlang;

  constructor(public $scope, public $stateParams, public $http) {
	  /*$scope.$parent.lang = $stateParams.lang;
	  tlang = $stateParams.lang;
	  teachers.$promise.then(function(teachers){
	      this.teachers = teachers;
	  });
	  var result = $http.get('/api/users/bylang/' + tlang,{isArray:true});
          console.log(tlang);
	  console.log(result);
	  teachers = result.data;
	  console.log(teachers);*/
  }

  $onInit() {
	   this.$scope.$parent.lang = this.$stateParams.lang;
	   this.tlang = this.$stateParams.lang;
           console.log(this.tlang);
	   var result = this.$http.get('/api/users/bylang/' + this.tlang,{isArray:true});
           console.log(this.tlang);
           console.log(result);
	   result.then(function(result){
              this.teachers = result;
	   });
           console.log(this.teachers);
  }
}

angular.module('polingualApp')
  .component('teachers', {
    templateUrl: 'app/teachers/teachers.html',
    controller: TeachersComponent
  });

})();
