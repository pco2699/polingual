'use strict';
(function(){

class ProfileComponent {
  constructor(){

  }
}

angular.module('testAppApp')
  .component('profile', {
    templateUrl: 'app/mypage/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'vm'
  });

})();
