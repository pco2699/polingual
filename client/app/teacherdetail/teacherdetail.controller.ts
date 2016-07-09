'use strict';
(function(){

class TeacherdetailComponent {

  public teacher = {};

  constructor(public $stateParams, public $http) {
  }

  $onInit() {
          var vid = this.$stateParams.vteacher;
          this.$http.get('/api/users/nonauth/' + vid )
          .then(result => {
              this.teacher = result.data;
           });
  }
}

angular.module('polingualApp')
  .component('teacherdetail', {
    templateUrl: 'app/teacherdetail/teacherdetail.html',
    controller: TeacherdetailComponent
  });

})();
