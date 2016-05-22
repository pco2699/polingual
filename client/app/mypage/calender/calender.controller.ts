'use strict';
(function(){

class CalenderComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('testAppApp')
  .component('calender', {
    templateUrl: 'app/mypage/calender.html',
    controller: CalenderComponent
  });

})();
