'use strict';
(function(){

class ProfileComponent {
  public langs = [{name:'Japanese', value:'Japanese'},
                  {name:'English', value:'English'},
                  {name:'Duck',value:'Duck'}];
                  
  constructor(public $http) {
  }
}

angular.module('polingualApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'prfl'
  });

})();
