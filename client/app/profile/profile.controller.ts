'use strict';
(function(){

class ProfileComponent {
  public langs = [{name:'Japanese', value:'Japanese'},
                  {name:'English', value:'English'},
                  {name:'Duck',value:'Duck'}];
  public message;
  public user;

  constructor(public $http, public Auth, public $state) {
  }

  update(){
    console.log(this.user.city + this.user.lang + this.user.gender)
    this.Auth.registerProfile(this.user.city, this.user.lang, this.user.gender)
      .then(() => {
        this.message = 'Success!'
        this.$state.go('main');
      }
    )
  }
}

angular.module('polingualApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'prfl'
  });

})();
