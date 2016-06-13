'use strict';
(function(){

class TeachersComponent {

  public teachers = [];	

  constructor() {
    this.message = 'Hello';
    var teacher1 = new Teacher('name1','gender1');
    var teacher2 = new Teacher('name2','gender2');
    var teacher3 = new Teacher('name3','gender3');
    teachers.push(teacher1);
    teachers.push(teacher2);
    teachers.push(teacher3);
  }
}

class Teacher {
   
   public name;
   public gender;

   constructor(name, gender) {
	   this.name = name;
	   this.gender = gender;
   }
}

angular.module('polingualApp')
  .component('teachers', {
    templateUrl: 'app/teachers/teachers.html',
    controller: TeachersComponent
  });

})();
