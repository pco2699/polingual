'use strict';
(function(){

class MemberComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.$scope = $scope;
    this.socket = socket;

    this.members = [];
  }

  $onInit() {
    this.$http.get('/api/members').then(response => {
      this.members = response.data;
      this.socket.syncUpdates('member', this.members);
    });
  }

  createMember() {
    if (this.$scope.member && this.$scope.member.name) {
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
