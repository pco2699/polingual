'use strict';
(function(){

class CalenderComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('testAppApp')
  .component('calender', {
    templateUrl: 'app/mypage/calender/calender.html',
    controller: CalenderComponent
  });

})();
