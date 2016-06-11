'use strict';
(function(){

class TeachersComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('testAppApp')
  .component('teachers', {
    templateUrl: 'app/teachers/teachers.html',
    controller: TeachersComponent
  });

})();
