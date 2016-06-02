'use strict';
(function(){

class CalendarComponent {
  constructor(public moment){

  }
  //These variables MUST be set as a minimum for the calendar to work
  calendarView = 'month';
  viewDate = new Date();
  events = [
  {
    title: 'An event',
    type: 'warning',
    startsAt: this.moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
    endsAt: this.moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
    draggable: true,
    resizable: true
  }, {
    title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
    type: 'info',
    startsAt: this.moment().subtract(1, 'day').toDate(),
    endsAt: this.moment().add(5, 'days').toDate(),
    draggable: true,
    resizable: true
  }, {
    title: 'This is a really long event title that occurs on every year',
    type: 'important',
    startsAt: this.moment().startOf('day').add(7, 'hours').toDate(),
    endsAt: this.moment().startOf('day').add(19, 'hours').toDate(),
    recursOn: 'year',
    draggable: true,
    resizable: true
  }
];

  isCellOpen = true;

  toggle($event, field, event) {
    $event.preventDefault();
    $event.stopPropagation();
    event[field] = !event[field];
  }
}
angular.module('testAppApp')
  .component('calendar', {
    templateUrl: 'app/mypage/calendar/calendar.html',
    controller: CalendarComponent,
    controllerAs: 'vm'
  });

})();
