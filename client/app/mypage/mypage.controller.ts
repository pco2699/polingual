'use strict';
(function(){

class MypageComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('testAppApp')
  .component('mypage', {
    templateUrl: 'app/mypage/mypage.html',
    controller: MypageComponent
  });

})();
