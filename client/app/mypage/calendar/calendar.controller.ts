'use strict';
(function(){

class CalendarComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('testAppApp')
  .component('calendar', {
    templateUrl: 'app/mypage/calender/calendar.html',
    controller: CalenderComponent
  });

})();
