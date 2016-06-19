'use strict';
(function(){

class ProfileComponent {
  public langs = [{name:'Japanese', value:'Japanese'},
                  {name:'English', value:'English'},
                  {name:'Duck',value:'Duck'}];
  public tags = [{text: 'Unko1'},
                 {text: 'Unko2'},
                 {text: 'Unko3'}];
  public message;
  public user;
  public gender;

  constructor(public $http, public Auth, public $state, public appConfig) {
  }

  loadItems(query){
      return this.$http.get('/api/interests/' + query);
  }
  
  $onInit(){
    this.gender = this.appConfig.gender;
  }

  update(){
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
