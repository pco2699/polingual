'use strict';
(function(){

class TeachersComponent {

  public teachers = [{name: 'Scott', gender: 'Male', country: 'Japan', language: 'Japanese'},
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
    {name: 'takayama', gender: 'Other', country: 'Japan', language: 'Japanese'}];

  constructor($scope, $stateParams, teachers) {
	  $scope.$parent.lang = $stateParams.lang;
	  this.teachers = teachers;
  }
}

angular.module('polingualApp')
  .component('teachers', {
    templateUrl: 'app/teachers/teachers.html',
    controller: TeachersComponent
  });

})();
