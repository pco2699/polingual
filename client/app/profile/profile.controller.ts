'use strict';
(function(){

class ProfileComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http = $http;
    this.langs= [];
  }
  $onInit() {
    this.$http.get('/api/lang').then(response => {
      this.langs = response.data;
  });
}

angular.module('testAppApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    contorollerAs: prfl
  });

})();
