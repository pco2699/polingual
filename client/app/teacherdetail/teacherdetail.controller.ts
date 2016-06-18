'use strict';
(function(){

class TeacherdetailComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('polingualApp')
  .component('teacherdetail', {
    templateUrl: 'app/teacherdetail/teacherdetail.html',
    controller: TeacherdetailComponent
  });

})();
