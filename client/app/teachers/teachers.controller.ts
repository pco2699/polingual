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

  public teachers = [];
  public tlang;

  constructor(public $scope, public $stateParams, public $http) {
  }

  $onInit() {
	   this.$scope.$parent.lang = this.$stateParams.lang;
	   this.tlang = this.$stateParams.lang;
	   this.$http.get('/api/users/bylang/' + this.tlang,{isArray:true})
	   .then(result => {
              var teachers = result.data;
	      console.log(teachers);
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
