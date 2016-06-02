'use strict';
(function(){

class MemberComponent {
  members = [];
  member = {name: ''};
  constructor(public $http, public $scope, public socket) {
  }

  $onInit() {
    this.$http.get('/api/members').then(response => {
      this.members = response.data;
      this.socket.syncUpdates('member', this.members);
    });
  }

  createMember() {
    if (this.member && this.member.name) {
      this.$http.post('/api/members', this.$scope.member).then(() => {
        this.$scope.member.name = '';
      });
    }
  }
}

angular.module('testAppApp')
  .component('member', {
    templateUrl: 'app/member/member.html',
    controller: MemberComponent
  });

})();
